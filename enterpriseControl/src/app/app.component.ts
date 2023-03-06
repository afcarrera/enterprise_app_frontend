import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'enterpriseControl';
  constructor(
    private route: Router,
    ) { }

  redirectHome(): void {
    this.route.navigate(
      ['']
    )
    .then(r => {
        if (!r){
          return Promise.reject('Error');
        }
        else{
          return;
        }
      }
    ).catch((msg: string) => {
        console.error(msg);
      }
    )
  }
}
