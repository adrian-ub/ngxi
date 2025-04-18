import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRoundArrowRightUpBoldIcon],svg[solar-round-arrow-right-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10M9.75 9a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-2.69l-4.72 4.72a.75.75 0 0 1-1.06-1.06l4.72-4.72H10.5A.75.75 0 0 1 9.75 9" clip-rule="evenodd"></svg:path>`,
})
export class SolarRoundArrowRightUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
