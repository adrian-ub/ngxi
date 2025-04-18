import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMenBoldDuotoneIcon],svg[solar-men-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="10" cy="14" r="8" fill="currentColor" opacity=".5"></svg:circle><svg:path fill="currentColor" d="M17 1.25a.75.75 0 0 0 0 1.5h3.19l-5.088 5.088q.579.48 1.06 1.06l5.088-5.087V7a.75.75 0 0 0 1.5 0V2.25a1 1 0 0 0-1-1z"></svg:path>`,
})
export class SolarMenBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
