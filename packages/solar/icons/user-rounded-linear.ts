import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUserRoundedLinearIcon],svg[solar-user-rounded-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="6" r="4"></svg:circle><svg:ellipse cx="12" cy="17" rx="7" ry="4"></svg:ellipse></svg:g>`,
})
export class SolarUserRoundedLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
