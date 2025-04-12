import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsInsomniaIcon],svg[simple-icons-insomnia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.136 3.458a8.542 8.542 0 1 1-7.9 5.286A3.322 3.322 0 1 0 8.88 4.1a8.5 8.5 0 0 1 3.256-.642M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12s12-5.373 12-12S18.627 0 12 0m0 1.22c5.953 0 10.78 4.827 10.78 10.78S17.953 22.78 12 22.78S1.22 17.953 1.22 12S6.047 1.22 12 1.22"></svg:path>`
})
export class SimpleIconsInsomniaIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
