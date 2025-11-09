import {bootstrapApplication} from '@angular/platform-browser';
import {Component, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection} from '@angular/core';


@Component({
  selector: 'app-root',
  template: './app.html',
})
export class App {}


bootstrapApplication(App, {providers: [provideBrowserGlobalErrorListeners(), provideZonelessChangeDetection()]})
  .catch((err) => console.error(err));

