import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsIcloudIcon],svg[simple-icons-icloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.762 4.29a6.51 6.51 0 0 0-5.669 3.332a3.6 3.6 0 0 0-1.558-.36a3.57 3.57 0 0 0-3.516 3A4.92 4.92 0 0 0 0 14.796a4.92 4.92 0 0 0 4.92 4.914a5 5 0 0 0 .617-.045h14.42c2.305-.272 4.041-2.258 4.043-4.589v-.009a4.594 4.594 0 0 0-3.727-4.508a6.51 6.51 0 0 0-6.511-6.27z"></svg:path>`
})
export class SimpleIconsIcloudIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
