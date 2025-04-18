import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUndoLeftRoundLinearIcon],svg[solar-undo-left-round-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7h11a5 5 0 0 1 0 10H8M4 7l3-3M4 7l3 3"></svg:path>`,
})
export class SolarUndoLeftRoundLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
