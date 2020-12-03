import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  accountDetails;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.httpClient.get('http://localhost:8080/account/d7d5d615-57bc-495a-9c67-ca7ed4fa8a50/events').subscribe((data) => {
      this.accountDetails = data;
    });
  }
}
