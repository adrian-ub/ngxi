import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsApmterminalsIcon],svg[simple-icons-apmterminals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.8 2.95L0 16.55v4.5L24 9.32V2.95zm.2 10.1l-8.87 4.21v3.68l8.87-3.4Z"></svg:path>`
})
export class SimpleIconsApmterminalsIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
