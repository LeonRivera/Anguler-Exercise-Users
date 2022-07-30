import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

import { ActivatedRoute, Router } from '@angular/router';
import { Model } from '../models/model';
import { ModelService } from '../services/model.service';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.css'],
  // providers: [MessageService]
})
export class FormUsersComponent implements OnInit {

  user:User = new User();
  status:any[];
  public updating:boolean = false;
  uploadForm:FormGroup;

  constructor(private router:Router,
    private activatedRoute:ActivatedRoute,
    private userService:UserService,
    public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig,
    private formBuilder:FormBuilder,
    private messageService: MessageService) { 
    this.status = [
      {name:'active', value:1},
      {name:'inactive', value:0}
    ]

    this.uploadForm = this.formBuilder.group({
      file: ['']
    })
  }

  ngOnInit(): void {
  }

  save():void{

    console.log("saving");

    const formData = new FormData();
    formData.append('file', this.uploadForm.get('file').value);

    console.log(this.uploadForm.get('file').value);
    // this.userService.save(this.user).subscribe();
    // this.router.navigate(['/']);
  }

  update():void{
    this.userService.update(this.user).subscribe();
    this.router.navigate(['/']);
  }

  onFileSelect(event){
    this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
    console.log("changing");
    console.log(event.target.files.length);
    if(event.target.files.length>0){
      const f = event.target.files[0];
      this.uploadForm.get('file').setValue(f);
      console.log("here");
    }
  }

}
