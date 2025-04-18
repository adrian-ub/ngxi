import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riHotelBedFillIcon],svg[ri-hotel-bed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11v9h-2v-3H4v3H2V4h2v10h8V7h6a4 4 0 0 1 4 4M8 13a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class RiHotelBedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
