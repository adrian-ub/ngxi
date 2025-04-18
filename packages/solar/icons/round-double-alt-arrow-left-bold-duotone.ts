import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRoundDoubleAltArrowLeftBoldDuotoneIcon],svg[solar-round-double-alt-arrow-left-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14.97 15.53a.75.75 0 1 0 1.06-1.06L13.56 12l2.47-2.47a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06z"></svg:path><svg:path fill="currentColor" d="M10.97 15.53a.75.75 0 1 0 1.06-1.06L9.56 12l2.47-2.47a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06z"></svg:path>`,
})
export class SolarRoundDoubleAltArrowLeftBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
