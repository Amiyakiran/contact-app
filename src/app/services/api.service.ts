import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyContact } from 'src/models/myContact';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl:string = 'http://localhost:3000/contacts'

  constructor(private http:HttpClient) { }

  //api call for get allcontacts-function

  getAllContacts():Observable<MyContact>{
     return this.http.get(this.baseUrl) 
  }

  //function for view a particular contact
  viewContact(contactId:string){
    return this.http.get(`${this.baseUrl}/${contactId}`)
  }
  //Function for getting a particular groupname
   getGroupName(groupId:string){
   return this.http.get('http://localhost:3000/groups/'+groupId)
  }
  //function for fetch all groups from http://localhost:3000/groups
  getAllGroups(){
    return this.http.get('http://localhost:3000/groups')
  }

  // function for Adding new contact to server
    addContact(contactBody:any){
    return  this.http.post(this.baseUrl, contactBody)
  }
  
  //function to delete a contact
  deleteContact(contactId:any){
   return this.http.delete(`${this.baseUrl}/${contactId}`)
  }

  //update contact
  updateContact(contactId:any,contactBody:any){
    return this.http.put(`${this.baseUrl}/${contactId}`,contactBody)

  }
}

