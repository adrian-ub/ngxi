import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCandleIcon],svg[tabler-candle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 21h6V11a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1zm3-19l1.465 1.638a2 2 0 1 1-3.015.099z"></svg:path>`,
})
export class TablerCandleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
