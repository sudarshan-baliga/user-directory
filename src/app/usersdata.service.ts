import { Injectable } from '@angular/core';
import {  Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class UsersdataService {
  users = {};
  constructor(private http:Http) {
   
   }
   getUsers(){
    return this.http.get('http://localhost:3000/api/users')
    .map(res => res.json());
  }

  addUser(name,address,contact,email){
    const data = JSON.stringify({"name":name,"address":address,"contact":contact,"email":email});
    return this.http.put('http://localhost:3000/api/users/add',data);
  }

  editUser(name,address,contact,email){
    const data = JSON.stringify({"name":name,"address":address,"contact":contact,"email":email});
    return this.http.post('http://localhost:3000/api/users/update',data);
  }

  deleteUser(email){
    const data = JSON.stringify({"email":email});
    return this.http.post('http://localhost:3000/api/users/delete',data);
  }
}
