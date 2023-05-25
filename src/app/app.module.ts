import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';

import { DashboardComponent } from './container/dashboard/dashboard.component';
import { FormSubmissionsComponent } from './container/form-submissions/form-submissions.component';

import { HeaderComponent } from './components/header/header.component';
import { CurrentTimeComponent } from './components/current-time/current-time.component';
import { MenuComponent } from './components/menu/menu.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { MembershipCardComponent } from './components/membership-card/membership-card.component';
import { HighlightsCardComponent } from './components/highlights-card/highlights-card.component';
import { AbsentListCardComponent } from './components/absent-list-card/absent-list-card.component';
import { AbsentItemComponent } from './components/absent-item/absent-item.component';
import { GraphComponent } from './components/graph/graph.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboardComponent },
  { path: 'formsubmission', component: FormSubmissionsComponent },
  { path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrentTimeComponent,
    MenuComponent,
    DashboardComponent,
    FormSubmissionsComponent,
    EmployeeCardComponent,
    MembershipCardComponent,
    HighlightsCardComponent,
    AbsentListCardComponent,
    AbsentItemComponent,
    GraphComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    MatAutocompleteModule, 
    MatTableModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
