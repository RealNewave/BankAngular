import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input()
  accountId: string;
  accountDetails;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.getDetailsForAccount(this.accountId);
  }

  getDetailsForAccount(accountId: string): void {
    this.httpClient.get(`http://localhost:8080/account/${accountId}/events`).subscribe((data) => {
      this.accountDetails = data;
      this.accountDetails = this.accountDetails.slice().reverse();
    });
  }

  getColorByEventType(eventType: string): string {
    switch (eventType){
      case 'ADDSALDO': return 'success';
      case 'CREATEACCOUNT': return 'info';
      case 'TRANSFER': return 'warning';
      case 'SUBTRACTSALDO': return 'danger';
      default: return 'none';
    }
  }

  transfer(toId: String, amount: string): void{
    this.httpClient.post(`http://localhost:8080/account/transfer`,{
      'fromId': this.accountId,
      'toId': toId,
      'amount': amount
    }).subscribe({
      error: error => {
        console.error(error);
      }
    });

  }
  withdraw(saldo: string): void {
    this.httpClient.post(`http://localhost:8080/account/${this.accountId}/withdraw/${saldo}`,{}).subscribe();
  }

  deposit(saldo: string): void {
    this.httpClient.post(`http://localhost:8080/account/${this.accountId}/deposit/${saldo}`,{}).subscribe();
  }

}
