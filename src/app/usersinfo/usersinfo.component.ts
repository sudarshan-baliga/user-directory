import { Component, OnInit } from '@angular/core';
import { UsersdataService } from '../usersdata.service';
import { Observable } from 'rxjs/Observable';
import {ElementRef} from '@angular/core';


@Component({
  selector: 'app-usersinfo',
  templateUrl: './usersinfo.component.html',
  styleUrls: ['./usersinfo.component.css']
})
export class UsersinfoComponent implements OnInit {
  users:any;
  constructor(private usersdataService: UsersdataService) { }
  ngOnInit() {
    this.usersdataService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  showmenu(element){
    var ele = document.getElementsByClassName(element.target.id) as HTMLCollectionOf<HTMLElement>;
    if( ele[0].style.display == 'block'){
      ele[0].style.display = 'none'
    }
    else
      ele[0].style.display = 'block'
  }
  add(){
    this.usersdataService.addUser("sudarshan","bondel","7411841663","baliga@gmail.com").subscribe(response => {
      console.log(response);
      //get the user list after add
    });
  }
  deleteUser(element){
    // var ele = document.getElementsByClassName(element.target.className);
    this.usersdataService.deleteUser(element).subscribe(response => {
      console.log(response);
    //get the user list after delete
      this.usersdataService.getUsers().subscribe(users => {
        this.users = users;
      });  
      })

    }
}
 
  

