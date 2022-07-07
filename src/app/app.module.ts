import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NbLayoutModule, NbSidebarModule, NbButtonModule, NbThemeModule, NbCardModule, NbInputModule, NbIconModule, NbListModule, NbUserModule } from '@nebular/theme';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodosComponent } from './todos/todos.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbThemeModule.forRoot(),
    NbCardModule,
    NbInputModule,
    FormsModule,
    ReactiveFormsModule,
    NbListModule,
    NbUserModule,
    NbIconModule,
    DragDropModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
