import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarReelBoldDuotoneIcon],svg[solar-reel-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10h9.25a.75.75 0 0 0 0-1.5h-3.98A9.99 9.99 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16.5 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M9 12a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m4.5-4.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 9a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class SolarReelBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
