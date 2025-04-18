import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riHotelBedLineIcon],svg[ri-hotel-bed-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11v9h-2v-3H4v3H2V4h2v10h8V7h6a4 4 0 0 1 4 4m-2 3v-3a2 2 0 0 0-2-2h-4v5zM8 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 2a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class RiHotelBedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
