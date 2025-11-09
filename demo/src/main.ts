import {bootstrapApplication} from '@angular/platform-browser';
import {Component, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection} from '@angular/core';
import {MatButton} from '@angular/material/button';


@Component({
  selector: 'app-root',
  template: `
    <section>
      <button matButton="elevated">elevated</button>
      <button matButton="outlined">outlined</button>
      <button matButton="filled">filled</button>
      <button matButton="tonal" >tonal</button>
      <button matButton>Basic</button>
    </section>
  `,
  imports: [
    MatButton
  ]
})
export class App {}


bootstrapApplication(App, {providers: [provideBrowserGlobalErrorListeners(), provideZonelessChangeDetection()]})
  .catch((err) => console.error(err));

