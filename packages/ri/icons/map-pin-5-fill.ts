import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMapPin5FillIcon],svg[ri-map-pin-5-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.657 15.657L12 21.314l-5.657-5.657a8 8 0 1 1 11.314 0M5 22h14v2H5z"></svg:path>`,
})
export class RiMapPin5FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
