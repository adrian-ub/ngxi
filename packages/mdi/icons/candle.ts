import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCandleIcon],svg[mdi-candle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 2c-1.66 0-3 3.34-3 5a3 3 0 0 0 3 3a3 3 0 0 0 3-3c0-1.66-1.34-5-3-5m0 4.5a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M10 11a1 1 0 0 0-1 1v8H7a1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1a1 1 0 0 0-1 1v1a3 3 0 0 0 3 3h12a1 1 0 0 0 1-1a1 1 0 0 0-1-1h-3v-8a1 1 0 0 0-1-1z"></svg:path>`,
})
export class MdiCandleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
