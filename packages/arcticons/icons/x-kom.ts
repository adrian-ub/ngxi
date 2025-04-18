import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsXKomIcon],svg[arcticons-x-kom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.51 24l13.056-13.055a3.188 3.188 0 1 0-4.51-4.51L24 19.49L10.945 6.435a3.188 3.188 0 1 0-4.51 4.51L19.49 24L6.434 37.055a3.188 3.188 0 1 0 4.51 4.51L24 28.512l13.055 13.055c.623.623 1.44.934 2.255.934s1.633-.311 2.256-.934a3.19 3.19 0 0 0 0-4.51z"></svg:path>`,
})
export class ArcticonsXKomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
