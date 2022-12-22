import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [
  // when someone request localhost4200('') then redirect to the given path('/contacts/admin=>path of ContactManagerComponent) and set pathmatch full do the work
  {path: '', redirectTo : '/contacts/admin', pathMatch:'full'},
  
  // path for ContactManagerComponent
  { path:'contacts/admin', component:ContactManagerComponent},
  
  // path for AddContactComponent
  { path: 'contacts/add', component:AddContactComponent},
  
  //path for UpdateContactComponent => :parametername is used to indicate which contact as to be edited
  { path: 'contacts/edit/:contactId', component : UpdateContactComponent},
  
  //path for ViewContactComponent
   {path: 'contacts/view/:contactId', component : ViewContactComponent},
   
   //path for PageNotFoundComponent => ** indicate those pages(url) are not the part of this project
   {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
