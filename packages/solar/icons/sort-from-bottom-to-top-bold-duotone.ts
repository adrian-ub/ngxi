import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSortFromBottomToTopBoldDuotoneIcon],svg[solar-sort-from-bottom-to-top-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 20.75a.75.75 0 0 0 .75-.75V6.25l1.65 2.2a.75.75 0 1 0 1.2-.9l-3-4a.75.75 0 0 0-1.35.45v16c0 .414.336.75.75.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3.25 8c0 .414.336.75.75.75h9a.75.75 0 0 0 0-1.5H4a.75.75 0 0 0-.75.75"></svg:path><svg:path fill="currentColor" d="M5.25 13c0 .414.336.75.75.75h7a.75.75 0 0 0 0-1.5H6a.75.75 0 0 0-.75.75" opacity=".7"></svg:path><svg:path fill="currentColor" d="M7.25 18c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5H8a.75.75 0 0 0-.75.75" opacity=".4"></svg:path>`,
})
export class SolarSortFromBottomToTopBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
