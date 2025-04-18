import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTextUnderlineCircleBoldDuotoneIcon],svg[solar-text-underline-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.25 17a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m1.5-10a.75.75 0 0 0-1.5 0v3a4.75 4.75 0 1 0 9.5 0V7a.75.75 0 0 0-1.5 0v3a3.25 3.25 0 0 1-6.5 0z"></svg:path>`,
})
export class SolarTextUnderlineCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
