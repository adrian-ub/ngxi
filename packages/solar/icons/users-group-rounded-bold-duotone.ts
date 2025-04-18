import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUsersGroupRoundedBoldDuotoneIcon],svg[solar-users-group-rounded-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="15" cy="6" r="3" fill="currentColor" opacity=".4"></svg:circle><svg:ellipse cx="16" cy="17" fill="currentColor" opacity=".4" rx="5" ry="3"></svg:ellipse><svg:circle cx="9.001" cy="6" r="4" fill="currentColor"></svg:circle><svg:ellipse cx="9.001" cy="17.001" fill="currentColor" rx="7" ry="4"></svg:ellipse>`,
})
export class SolarUsersGroupRoundedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
