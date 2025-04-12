import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsYahooIcon],svg[simple-icons-yahoo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.86 1.56l-4.59 10.31h5.13L24 1.56h-5.14M0 6.71l5.15 11.56l-1.85 4.17h4.53l6.86-15.73h-4.5l-2.8 6.73l-2.77-6.73H0m15.62 6.16c-1.67 0-2.91 1.25-2.91 2.71c0 1.42 1.2 2.61 2.79 2.61c1.68 0 2.93-1.23 2.93-2.69c0-1.47-1.2-2.63-2.81-2.63Z"></svg:path>`
})
export class SimpleIconsYahooIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
