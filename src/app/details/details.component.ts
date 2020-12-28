import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BankaccountService} from '../bankaccountservice/bankaccount.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input()
  accountId: string;
  accounts;

  accountDetails;
  formState = [false, false, false];

  constructor(private httpClient: HttpClient, private api: BankaccountService) {
  }

  ngOnInit(): void {
    this.api.getAccounts().subscribe((data) =>{
      this.accounts = data;
    });
    this.getDetailsForAccount(this.accountId);
  }

  getDetailsForAccount(accountId: string): void {
    this.api.getDetailsForAccount(accountId).subscribe((data) =>{
      this.accountDetails = data;
      this.accountDetails = this.accountDetails.slice().reverse();
    });
  }

  transfer(toId: string, amount: string): void {
    this.api.transfer(this.accountId, toId, amount).subscribe({
      next: () => {
        this.getDetailsForAccount(this.accountId);
        this.getDetailsForAccount(toId.trim());
      },
      error: error => {
        console.error(error);
      }
    });
    this.closeAllActions();
  }

  withdraw(saldo: string): void {
    this.api.withdraw(this.accountId, saldo).subscribe(() =>this.getDetailsForAccount(this.accountId));
    this.closeAllActions();
  }

  deposit(saldo: string): void {
    this.api.deposit(this.accountId, saldo).subscribe(() =>this.getDetailsForAccount(this.accountId));
    this.closeAllActions();
  }

  showForm(index: number) {
    this.closeAllActions();
    this.formState[index] = true;
  }

  private closeAllActions() {
    this.formState = [false, false, false];
  }


  getColorByEventType(eventType: string): string {
    switch (eventType) {
      case 'DEPOSIT':
        return 'success';
      case 'CREATEACCOUNT':
        return 'info';
      case 'TRANSFER':
        return 'warning';
      case 'WITHDRAW':
        return 'danger';
      default:
        return 'none';
    }
  }
}
