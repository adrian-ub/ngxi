import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsHtmxIcon],svg[simple-icons-htmx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 13.01v-2l7.09-2.98l.58 1.94l-5.1 2.05l5.16 2.05l-.63 1.9Zm16.37 1.03l5.18-2l-5.16-2.09l.65-1.88L24 10.95v2.12L17 16zm-2.85-9.98H16l-5.47 15.88H8.05Z"></svg:path>`
})
export class SimpleIconsHtmxIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
