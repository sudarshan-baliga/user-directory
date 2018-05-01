import { Injectable } from '@angular/core';
import {  Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class UsersdataService {
  users = {};
  constructor(private http:Http) {
   
   }
   getUsers(){
    return this.http.get('http://young-waters-81707.herokuapp.com/users')
    .map(res => res.json());
  }

  addUser(name,address,contact,email){
    const data = JSON.stringify({"name":name,"address":address,"contact":contact,"email":email});
    return this.http.put('http://young-waters-81707.herokuapp.com/users/add',data);
  }
  deleteUser(email){
    const data = JSON.stringify({"email":email});
    return this.http.post('http://young-waters-81707.herokuapp.com/users/delete',data);
  }
}
