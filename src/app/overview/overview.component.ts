import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  accounts;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.httpClient.get('http://localhost:8080/account/').subscribe((data) => {
      this.accounts = data;
    });
  }

}
