import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './Components/Clients/add-client/add-client.component';
import { ViewClientComponent } from './Components/Clients/view-client/view-client.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { LoginComponent } from './Components/login/login.component';
import { ViewExpensesComponent } from './Components/Expenses/view-expenses/view-expenses.component';
import { AddExpensesComponent } from './Components/Expenses/add-expenses/add-expenses.component';

const routes: Routes = [
  {path: "Login", component: LoginComponent},
  {path: "", redirectTo: "Login", pathMatch: 'full'},
  {path:'', component: LayoutComponent, children: [ // this layout component have header, footer, sidebar,..... implement in it/ and then the routing make children open with this constant layout
    {path: "AddClient", component:AddClientComponent},
    {path: "Clients", component: ViewClientComponent},
    {path: "AddExpense", component:AddExpensesComponent},
    {path: "Expenses", component: ViewExpensesComponent},
  ]},
  {path: "**", component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
