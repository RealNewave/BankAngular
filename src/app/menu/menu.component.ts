import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BankaccountService} from '../bankaccountservice/bankaccount.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private httpClient: HttpClient, private api: BankaccountService) { }

  ngOnInit(): void {
  }

  createNewAccount(): void {
    this.api.create().subscribe(data => console.log(data));
  }

}
