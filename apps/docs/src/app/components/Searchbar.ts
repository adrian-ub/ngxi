import { Component, input, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'Searchbar',
  templateUrl: './Searchbar.html',
})
export class Searchbar implements FormValueControl<string> {
  value = model('');
  placeholder = input('search icons or collections...')
}
