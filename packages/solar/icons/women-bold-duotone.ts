import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarWomenBoldDuotoneIcon],svg[solar-women-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="9" r="7" fill="currentColor" opacity=".5"></svg:circle><svg:path fill="currentColor" d="M11.25 15.96v1.79H9.5a.75.75 0 0 0 0 1.5h1.75V22a.75.75 0 0 0 1.5 0v-2.75h1.75a.75.75 0 0 0 0-1.5h-1.75v-1.79a7 7 0 0 1-1.5 0"></svg:path>`,
})
export class SolarWomenBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
