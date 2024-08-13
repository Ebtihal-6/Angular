import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './Components/Clients/add-client/add-client.component';
import { ViewClientComponent } from './Components/Clients/view-client/view-client.component';
import { LayoutComponent } from './Components/layout/layout.component';

const routes: Routes = [
  {path:'', component: LayoutComponent, children: [ // this layout component have header, footer, sidebar,..... implement in it/ and then the routing make children open with this constant layout
    {path: "AddClient", component:AddClientComponent},
    {path: "Clients", component: ViewClientComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
