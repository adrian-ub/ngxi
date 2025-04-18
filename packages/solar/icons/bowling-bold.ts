import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBowlingBoldIcon],svg[solar-bowling-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m1.5-10a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M12 5.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-2.5 4a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarBowlingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
