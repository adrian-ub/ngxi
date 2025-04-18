import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCandlestickIcon],svg[lets-icons-candlestick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" d="M8 3v3m0 8v3"></svg:path><svg:rect width="4" height="8" x="6" y="6" rx=".8"></svg:rect><svg:path stroke-linecap="round" d="M16 7v5m0 5v3"></svg:path><svg:rect width="4" height="5" x="14" y="12" rx=".8"></svg:rect></svg:g>`,
})
export class LetsIconsCandlestickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
