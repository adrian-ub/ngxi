import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsNewrelicIcon],svg[simple-icons-newrelic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.002 14.31v7.383L12 24V12L1.608 6v4.616ZM12 0L2.823 5.298l3.998 2.308L12 4.616l6.393 3.692v7.384l-5.178 2.99V23.3l9.176-5.3V6Z"></svg:path>`
})
export class SimpleIconsNewrelicIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
