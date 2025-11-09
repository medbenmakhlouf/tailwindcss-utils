import {bootstrapApplication} from '@angular/platform-browser';
import {Component, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatLabel} from '@angular/material/form-field';
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from '@angular/material/autocomplete';
import {MatFormField, MatInput} from '@angular/material/input';


@Component({
  selector: 'app-root',
  template: `
    <section>
      <button matButton="elevated">elevated</button>
      <button matButton="outlined">outlined</button>
      <button matButton="filled" class="mb-filled-container-color-sky-500">filled</button>
      <button matButton="tonal" >tonal</button>
      <button matButton>Basic</button>
    </section>
    <mat-form-field class="example-full-width mff-filled-container-color-sky-500">
      <mat-label>Number</mat-label>
      <input type="text"
             placeholder="Pick one"
             aria-label="Number"
             matInput
             [matAutocomplete]="auto">
      <mat-autocomplete #auto="matAutocomplete">
        @for (option of options; track option) {
          <mat-option [value]="option">{{option}}</mat-option>
        }
      </mat-autocomplete>
    </mat-form-field>
  `,
  imports: [
    MatButton,
    MatLabel,
    MatAutocomplete,
    MatOption,
    MatInput,
    MatFormField,
    MatAutocompleteTrigger
  ]
})
export class App {
  options = ['One', 'Two', 'Three'];
}


bootstrapApplication(App, {providers: [provideBrowserGlobalErrorListeners(), provideZonelessChangeDetection()]})
  .catch((err) => console.error(err));

