import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laDigitalOceanIcon],svg[la-digital-ocean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.831 3 3 8.832 3 16h5a8 8 0 1 1 8 8v5c7.169 0 13-5.832 13-13S23.169 3 16 3m0 21v-6h-6v6zm-6 0H6v4h4zm-4 0v-3H3v3z"></svg:path>`,
})
export class LaDigitalOceanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
