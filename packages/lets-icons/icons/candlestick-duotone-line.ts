import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCandlestickDuotoneLineIcon],svg[lets-icons-candlestick-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsCandlestickDuotoneLine0"><svg:g fill="none"><svg:path stroke="silver" stroke-linecap="round" stroke-opacity=".25" d="M7.5 3.5v3m0 8v4"></svg:path><svg:path fill="#fff" d="M5 7.8A1.8 1.8 0 0 1 6.8 6h1.4A1.8 1.8 0 0 1 10 7.8v5.4A1.8 1.8 0 0 1 8.2 15H6.8A1.8 1.8 0 0 1 5 13.2z"></svg:path><svg:path stroke="silver" stroke-linecap="round" stroke-opacity=".25" d="M16.5 6.5v5m0 5v4"></svg:path><svg:path fill="#fff" d="M14 12.8a1.8 1.8 0 0 1 1.8-1.8h1.4a1.8 1.8 0 0 1 1.8 1.8v2.4a1.8 1.8 0 0 1-1.8 1.8h-1.4a1.8 1.8 0 0 1-1.8-1.8z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsCandlestickDuotoneLine0)"></svg:path>`,
})
export class LetsIconsCandlestickDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
