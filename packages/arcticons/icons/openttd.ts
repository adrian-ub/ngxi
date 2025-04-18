import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOpenttdIcon],svg[arcticons-openttd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.08 23.239L24 3.319l19.92 19.92L24 43.159z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.709 29.872c1.042 1.356 2.348 1.861 4.165 1.861h2.516a4.24 4.24 0 0 0 4.237-4.247h0a4.243 4.243 0 0 0-4.237-4.247h-2.78a4.24 4.24 0 0 1-4.237-4.247h0a4.243 4.243 0 0 1 4.238-4.247h2.515c1.817 0 3.123.505 4.165 1.861M24 33.857V12.621m-3.28 27.257l-3.808 3.808l-13.359-13.36l3.808-3.807M27.28 39.878l3.808 3.808l13.359-13.36l-3.808-3.807"></svg:path>`,
})
export class ArcticonsOpenttdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
