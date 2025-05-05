import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCandleIcon],svg[picon-candle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h4v4H2m3-4q2-2-1-4q-3 2-1 4m1 0Q2 3 4 1q2 2 0 3M3 4q0 5 1 0"></svg:path>`,
})
export class PiconCandleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
