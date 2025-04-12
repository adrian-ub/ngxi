import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsVuetifyIcon],svg[simple-icons-vuetify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.312 12.564L12.636 1.2H0zM14.94 1.2L7.464 14.64L12 22.8L24 1.2zm4.98 2.4L12 17.856l-1.788-3.216L16.344 3.6zM6.312 7.62L4.08 3.6h4.476z"></svg:path>`
})
export class SimpleIconsVuetifyIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
