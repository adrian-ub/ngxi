import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRoundGraphBoldIcon],svg[solar-round-graph-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m9.25-7a.75.75 0 0 1 .75-.75A7.75 7.75 0 1 1 4.25 12a.75.75 0 0 1 1.5 0A6.25 6.25 0 1 0 12 5.75a.75.75 0 0 1-.75-.75M12 7.25a.75.75 0 0 0 0 1.5a3.25 3.25 0 0 1 0 6.5a.75.75 0 0 0 0 1.5a4.75 4.75 0 1 0 0-9.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarRoundGraphBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
