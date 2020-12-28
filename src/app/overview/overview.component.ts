import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BankaccountService} from '../bankaccountservice/bankaccount.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  accounts;

  constructor(private httpClient: HttpClient, private api: BankaccountService) {
  }

  ngOnInit(): void {
    this.api.getAccounts().subscribe((data) => {
      this.accounts = data;
    });
  }

}
