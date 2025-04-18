import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRoundArrowLeftDownBoldDuotoneIcon],svg[solar-round-arrow-left-down-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.5 15.75a.75.75 0 0 0 0-1.5h-2.69l4.72-4.72a.75.75 0 0 0-1.06-1.06l-4.72 4.72V10.5a.75.75 0 0 0-1.5 0V15c0 .414.336.75.75.75z"></svg:path>`,
})
export class SolarRoundArrowLeftDownBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
