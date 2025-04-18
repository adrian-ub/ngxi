import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarVinylBoldDuotoneIcon],svg[solar-vinyl-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.818 3.395a.75.75 0 0 1 .669-.11a9.54 9.54 0 0 1 6.228 6.228a.75.75 0 1 1-1.43.45a8.05 8.05 0 0 0-4.273-4.87v7.276a3.381 3.381 0 1 1-1.5-2.81V4a.75.75 0 0 1 .306-.605" clip-rule="evenodd"></svg:path>`,
})
export class SolarVinylBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
