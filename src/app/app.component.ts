import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ';
  constructor(private http: HttpClient) {}

  ngOnInit() {
    const headers = {
      Authorization: '563492ad6f91700001000001c722a0758932413d824af1276873e340',
    };
    this.http
      .get('https://api.pexels.com/v1/curated/', {
        headers,
      })
      .subscribe(this.callback);
  }
  callback() {
    console.log('hello');
  }
}
