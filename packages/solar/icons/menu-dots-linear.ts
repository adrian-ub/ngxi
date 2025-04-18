import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMenuDotsLinearIcon],svg[solar-menu-dots-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="5" cy="12" r="2"></svg:circle><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:circle cx="19" cy="12" r="2"></svg:circle></svg:g>`,
})
export class SolarMenuDotsLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
