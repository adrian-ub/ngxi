import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneChartStockIcon],svg[icon-park-twotone-chart-stock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTChartStock0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M6 16h8v16H6z"></svg:path><svg:path stroke-linecap="round" d="M10 6v10m0 16v10"></svg:path><svg:path fill="#555" d="M34 16h8v16h-8z"></svg:path><svg:path stroke-linecap="round" d="M38 6v10m0 16v10"></svg:path><svg:path fill="#555" d="M20 14h8v16h-8z"></svg:path><svg:path stroke-linecap="round" d="M24 4v10m0 16v10"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTChartStock0)"></svg:path>`,
})
export class IconParkTwotoneChartStockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
