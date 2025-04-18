import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineChartStockIcon],svg[icon-park-outline-chart-stock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 16h8v16H6z"></svg:path><svg:path stroke-linecap="round" d="M10 6v10m0 16v10"></svg:path><svg:path d="M34 16h8v16h-8z"></svg:path><svg:path stroke-linecap="round" d="M38 6v10m0 16v10"></svg:path><svg:path d="M20 14h8v16h-8z"></svg:path><svg:path stroke-linecap="round" d="M24 4v10m0 16v10"></svg:path></svg:g>`,
})
export class IconParkOutlineChartStockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
