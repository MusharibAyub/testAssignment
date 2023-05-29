import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button'
 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MonthNamePipe } from './pipes/month-name.pipe';

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
import { DrawerComponent } from './components/drawer/drawer.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'formsubmission', component: FormSubmissionsComponent },
  { path: '**', redirectTo: 'dashboard' }
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
    TableComponent,
    MonthNamePipe,
    DrawerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatAutocompleteModule, 
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
