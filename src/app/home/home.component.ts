import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { FormControl } from '@angular/forms';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  clientName: string = '';
  cin: string = '';
  loanAmount: string = '';
  salary: string = '';
  response: string = '';
  constructor(private http: HttpClient) {}
  onUpload() {}
  submit() {
    const loanApplication = {
      clientName: this.clientName,
      cin: Number(this.cin),
      loanAmount: Number(this.loanAmount),
      salary: Number(this.salary),
    };
    if(loanApplication.loanAmount < loanApplication.salary/3){
      this.response="Loan application submitted successfully! You will be notified in the next days."
    }
      else if(loanApplication.loanAmount >= loanApplication.salary/2) {
        this.response="Loan can not be approved : loan amount is greater than half of the salary.  "
      }
    // this.http
    //   .post('http://localhost:3000/loan-app-manager', loanApplication)
    //   .subscribe(
    //     (response: any) => {
    //       // Success
    //       console.log('Loan application submitted successfully!', response);
    //       this.response = response;
    //     },
    //     (error) => {
    //       // Error
    //       console.error('Error submitting loan application:', error);
    //     }
    //   );
  }

  ngOnInit(): void {}
}
