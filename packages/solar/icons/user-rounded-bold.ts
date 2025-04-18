import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUserRoundedBoldIcon],svg[solar-user-rounded-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="6" r="4" fill="currentColor"></svg:circle><svg:ellipse cx="12" cy="17" fill="currentColor" rx="7" ry="4"></svg:ellipse>`,
})
export class SolarUserRoundedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
