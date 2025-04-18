import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUndoRightRoundBrokenIcon],svg[solar-undo-right-round-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7H9a5 5 0 0 0 0 10M20 7l-3-3m3 3l-3 3m-1 7h-3"></svg:path>`,
})
export class SolarUndoRightRoundBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
