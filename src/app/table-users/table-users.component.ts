import { Component, OnInit } from '@angular/core';
import {DialogService} from 'primeng/dynamicdialog';
import { FormModelsComponent } from '../form-models/form-models.component';
import { FormUsersComponent } from '../form-users/form-users.component';
import { Model } from '../models/model';
import { User } from '../models/user';
import { AbstractRepository } from '../services/abstract-repository';
import { ModelService } from '../services/model.service';
import { UserService } from '../services/user.service';
import { OperationUtils } from '../utils/operation-utils';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css'],
  providers: [DialogService]
})
export class TableUsersComponent implements OnInit {
  users: User[];

  usersAny:any;

  counterEmails:number = 0;

  id:number = 0;
  
  // models = [
  //   {fieldString: "Value",fieldNumber:3, fieldDate:'2021-07-21'},
  //   {fieldString: "Value 4",fieldNumber:4, fieldDate:'2021-07-21'},
  //   {fieldString: "Value 5",fieldNumber:5, fieldDate:'2021-07-21'},
  // ]

  constructor(private userService: UserService,
    public dialogService: DialogService) {
    // this.userService.findAll().subscribe((m) => (this.users = m));
  }

  ngOnInit(): void {
    this.userService.findAll().subscribe(
      u => {
        let xd = u;
        console.log(xd);
        this.users = xd;
        console.log(this.users);
      }
    );
    // console.log(this.usersAny);
  }

  delete(id: number) {
    this.userService.deleteById(id).subscribe();
    this.users = this.users.filter( m => m.id != id);
    console.log(this.users);
  }

  setIdEditDialog(id:number){
    this.id = id;
    this.show();
  }

  show(){
    const ref = this.dialogService.open(FormUsersComponent, {
      data: {
        id: this.id
      },
      header: 'User',
      width: '30%',
      height: '100%'
  });
  }

}
