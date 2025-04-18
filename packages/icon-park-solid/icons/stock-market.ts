import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidStockMarketIcon],svg[icon-park-solid-stock-market-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M6 20h8v14H6zm14-6h8v26h-8z"></svg:path><svg:path stroke-linecap="round" d="M24 44v-4"></svg:path><svg:path fill="currentColor" d="M34 12h8v9h-8z"></svg:path><svg:path stroke-linecap="round" d="M10 20V10m28 24V21m0-9V4"></svg:path></svg:g>`,
})
export class IconParkSolidStockMarketIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
