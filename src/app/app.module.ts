import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TextInputHighlightModule } from 'angular-text-input-highlight';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TextInputHighlightModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
