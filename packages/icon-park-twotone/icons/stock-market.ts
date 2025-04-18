import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneStockMarketIcon],svg[icon-park-twotone-stock-market-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTStockMarket0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M6 20h8v14H6zm14-6h8v26h-8z"></svg:path><svg:path stroke-linecap="round" d="M24 44v-4"></svg:path><svg:path fill="#555" d="M34 12h8v9h-8z"></svg:path><svg:path stroke-linecap="round" d="M10 20V10m28 24V21m0-9V4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTStockMarket0)"></svg:path>`,
})
export class IconParkTwotoneStockMarketIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
