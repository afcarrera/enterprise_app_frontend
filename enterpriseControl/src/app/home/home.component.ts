import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { constants } from 'src/app/util/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  enterprisePath: string = constants.SERVICES.ENTERPRISE.substring(1);
  departmentPath: string = constants.SERVICES.DEPARTMENT.substring(1);
  employeePath: string = constants.SERVICES.EMPLOYEE.substring(1);
  constructor(
    private route: Router,
    ) { }

  redirectComponent(path: string): void {
    this.route.navigate(
      [path]
    )
    .then(r => {
        if (!r){
          return Promise.reject('Error');
        }else{
          return;
        }
      }
    ).catch((msg: string) => {
        console.error(msg);
      }
    )
  }

}
