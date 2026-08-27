import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Theme } from '../state/theme';

@Component({
  selector: 'Navbar',
  imports: [RouterLink],
  host: {
    class: 'px-4 py-2',
  },
  templateUrl: './Navbar.html',
})
export class Navbar {
  protected readonly theme = inject(Theme);
}
