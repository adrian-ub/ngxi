import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRoundArrowLeftDownBoldIcon],svg[solar-round-arrow-left-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m2.25 13a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.72-4.72a.75.75 0 1 1 1.06 1.06l-4.72 4.72h2.69a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarRoundArrowLeftDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
