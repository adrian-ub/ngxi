import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBowlingBoldDuotoneIcon],svg[solar-bowling-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M8 8a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m4-2.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path>`,
})
export class SolarBowlingBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
