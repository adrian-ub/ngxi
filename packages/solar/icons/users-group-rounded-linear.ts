import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUsersGroupRoundedLinearIcon],svg[solar-users-group-rounded-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="9" cy="6" r="4"></svg:circle><svg:path stroke-linecap="round" d="M15 9a3 3 0 1 0 0-6"></svg:path><svg:ellipse cx="9" cy="17" rx="7" ry="4"></svg:ellipse><svg:path stroke-linecap="round" d="M18 14c1.754.385 3 1.359 3 2.5c0 1.03-1.014 1.923-2.5 2.37"></svg:path></svg:g>`,
})
export class SolarUsersGroupRoundedLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
