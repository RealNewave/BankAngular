import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BankaccountService {

  constructor(private httpClient: HttpClient) {
  }

  getDetailsForAccount(accountId: string){
    return this.httpClient.get(`${environment.apiUrl}/account/${accountId}/events`);
  }

  public withdraw(accountId: string, saldo: string) {
   return this.httpClient.post(`${environment.apiUrl}/account/${accountId}/withdraw/${saldo}`, {});
  }

  public deposit(accountId: string, saldo: string) {
    return this.httpClient.post(`${environment.apiUrl}/account/${accountId}/deposit/${saldo}`, {});
  }

  public transfer(fromId: string, toId: string, amount: string) {
   return this.httpClient.post(`${environment.apiUrl}/account/transfer`, {
      'fromId': fromId,
      'toId': toId.trim(),
      'amount': amount
    });
  }

  public getAccounts() {
    return this.httpClient.get(`${environment.apiUrl}/account/`);
  }

  public create() {
    return this.httpClient.post(`${environment.apiUrl}/account/create`,{});
  }
}
