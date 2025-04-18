import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamCandleIcon],svg[jam-candle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11v6h2v-6zm4 6h5a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h5V9h6zM2 19v1h16v-1zm8-10.6a3 3 0 0 1-3-3Q7 3.742 10 0q3 3.742 3 5.4a3 3 0 0 1-3 3m0-1.952c.552 0 1-.48 1-1c0-.466-.333-1.109-1-2c-.667.891-1 1.534-1 2c0 .52.448 1 1 1"></svg:path>`,
})
export class JamCandleIcon {
  readonly viewBox = input("-2 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
