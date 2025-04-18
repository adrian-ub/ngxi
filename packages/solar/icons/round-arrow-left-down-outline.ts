import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRoundArrowLeftDownOutlineIcon],svg[solar-round-arrow-left-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m14.28-3.53a.75.75 0 0 1 0 1.06l-4.72 4.72h2.69a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.72-4.72a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarRoundArrowLeftDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
