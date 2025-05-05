import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHotelIcon],svg[picon-hotel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 6h8v1H0m1-2C0 1 8 1 7 5M4 0l1 1l-1 1l-1-1"></svg:path>`,
})
export class PiconHotelIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
