import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRoundArrowRightDownBoldDuotoneIcon],svg[solar-round-arrow-right-down-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10.5 15.75a.75.75 0 0 1 0-1.5h2.69L8.47 9.53a.75.75 0 0 1 1.06-1.06l4.72 4.72V10.5a.75.75 0 0 1 1.5 0V15a.75.75 0 0 1-.75.75z"></svg:path>`,
})
export class SolarRoundArrowRightDownBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
