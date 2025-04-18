import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkStockMarketIcon],svg[icon-park-stock-market-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="8" height="14" x="6" y="20" fill="#2F88FF"></svg:rect><svg:rect width="8" height="26" x="20" y="14" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M24 44V40"></svg:path><svg:rect width="8" height="9" x="34" y="12" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M10 20V10"></svg:path><svg:path stroke-linecap="round" d="M38 34V21"></svg:path><svg:path stroke-linecap="round" d="M38 12V4"></svg:path></svg:g>`,
})
export class IconParkStockMarketIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
