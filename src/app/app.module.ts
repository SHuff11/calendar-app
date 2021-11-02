import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CalendarComponent } from './header/calendar/calendar.component';
import { MonthComponent } from './header/calendar/month/month.component';
import { DayComponent } from './header/calendar/month/day/day.component';
import { TasklistComponent } from './header/calendar/month/day/tasklist/tasklist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalendarComponent,
    MonthComponent,
    DayComponent,
    TasklistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
