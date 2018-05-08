import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  UsersdataService
} from '../usersdata.service';
import {
  Observable
} from 'rxjs/Observable';
import {
  ElementRef
} from '@angular/core';
import {
  NgForm
} from '@angular/forms';


@Component({
  selector: 'app-usersinfo',
  templateUrl: './usersinfo.component.html',
  styleUrls: ['./usersinfo.component.css']
})
export class UsersinfoComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn: ElementRef; //for closing the adduser popup
  //default values for edit menu
  edtName = "usename";
  edtAddress = 'address';
  edtContact = "0000000000";
  edtEmail = "example@example.com";
  user_toggle = []
  users: any;
  constructor(private usersdataService: UsersdataService) {}
  ngOnInit() {
    this.usersdataService.getUsers().subscribe(users => {
      this.users = users;
      this.filltoggle();
    });
  }
  filltoggle() {
    this.user_toggle = [];
    for (var i = 0; i < this.users.length; ++i) {
      this.user_toggle.push(0);
    }
  }
  check(i) {
    return this.user_toggle[i];
  }
  showmenu(element) {
    var set = this.user_toggle[element];
    this.filltoggle();
    this.user_toggle[element] = !set;
  }
  addUser(form: NgForm) {
    this.usersdataService.addUser(form.value.name, form.value.address, form.value.contact, form.value.email).subscribe(response => {
      console.log("adding user " + response.status);
      if (response.status == 200)
        this.closeBtn.nativeElement.click();
      this.usersdataService.getUsers().subscribe(users => {
        this.users = users;
      });
      //get the user list after adding user

    });
  }
  updateEditVal(element){
    var index = element.target.className;
    this.edtName = this.users[index].name;
    this.edtContact = this.users[index].contact;
    this.edtAddress = this.users[index].address;
    this.edtEmail = this.users[index].email;
  }
  editUser(form: NgForm) {
    console.log(form);
    this.usersdataService.editUser(form.value.name, form.value.address, form.value.contact, this.edtEmail).subscribe(response => {
      console.log("edit user " + response );
      
    // this.closeBtnEdit.nativeElement.click();
      this.usersdataService.getUsers().subscribe(users => {
        this.users = users;
      });
      //get the user list after adding user

    });
  }

  deleteUser(element) {
    // var ele = document.getElementsByClassName(element.target.className);
    this.usersdataService.deleteUser(element).subscribe(response => {
      console.log("deleting user " + response);
      //get the user list after delete
      this.usersdataService.getUsers().subscribe(users => {
        this.users = users;
      });
    })
  }
  
}
