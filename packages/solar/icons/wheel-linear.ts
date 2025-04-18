import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarWheelLinearIcon],svg[solar-wheel-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:circle cx="12" cy="12" r="6"></svg:circle><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path stroke-linecap="round" d="M6 12h4m4 0h4m-9 5.196l2-3.464m2-3.464l2-3.464m0 10.392l-2-3.464m-2-3.464L9 6.804"></svg:path></svg:g>`,
})
export class SolarWheelLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
