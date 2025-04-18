import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUserCircleLinearIcon],svg[solar-user-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="9" r="3"></svg:circle><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path stroke-linecap="round" d="M17.97 20c-.16-2.892-1.045-5-5.97-5s-5.81 2.108-5.97 5"></svg:path></svg:g>`,
})
export class SolarUserCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
