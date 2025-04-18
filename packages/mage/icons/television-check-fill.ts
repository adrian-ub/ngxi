import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageTelevisionCheckFillIcon],svg[mage-television-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.9 3.665a3.7 3.7 0 0 0-2.65-1.1H5.75A3.76 3.76 0 0 0 2 6.315v7.87a3.76 3.76 0 0 0 3.75 3.75h5.5v2H8.53a.75.75 0 0 0 0 1.5h6.94a.75.75 0 1 0 0-1.5h-2.72v-2h5.5a3.72 3.72 0 0 0 2.65-1.1a3.76 3.76 0 0 0 1.1-2.65v-7.87a3.72 3.72 0 0 0-1.1-2.65m-5.37 5.32l-3.4 3.4a1.4 1.4 0 0 1-.99.41a1.5 1.5 0 0 1-.54-.11a1.35 1.35 0 0 1-.45-.31l-1.68-1.68a.75.75 0 1 1 1.06-1.06l1.62 1.62l3.32-3.33a.75.75 0 1 1 1.06 1.06"></svg:path>`,
})
export class MageTelevisionCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
