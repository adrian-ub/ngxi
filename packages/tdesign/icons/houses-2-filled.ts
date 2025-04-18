import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHouses2FilledIcon],svg[tdesign-houses-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4V2H7v2H5.435l-4.2 7h21.533l-4.2-7zm12 9H3v9h5.501v-6h7v6H21z"></svg:path><svg:path fill="currentColor" d="M10.501 18v4h3v-4z"></svg:path>`,
})
export class TdesignHouses2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
