import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCandlestickLightIcon],svg[lets-icons-candlestick-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" d="M7.5 3.5v3m0 8v4"></svg:path><svg:path d="M6.8 6.5a1.3 1.3 0 0 0-1.3 1.3v5.4a1.3 1.3 0 0 0 1.3 1.3h1.4a1.3 1.3 0 0 0 1.3-1.3V7.8a1.3 1.3 0 0 0-1.3-1.3z"></svg:path><svg:path stroke-linecap="round" d="M16.5 6.5v5m0 5v4"></svg:path><svg:path d="M15.8 11.5a1.3 1.3 0 0 0-1.3 1.3v2.4a1.3 1.3 0 0 0 1.3 1.3h1.4a1.3 1.3 0 0 0 1.3-1.3v-2.4a1.3 1.3 0 0 0-1.3-1.3z"></svg:path></svg:g>`,
})
export class LetsIconsCandlestickLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
