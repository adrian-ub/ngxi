import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkChartStockIcon],svg[icon-park-chart-stock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="8" height="16" x="6" y="16" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M10 6V16"></svg:path><svg:path stroke-linecap="round" d="M10 32V42"></svg:path><svg:rect width="8" height="16" x="34" y="16" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M38 6V16"></svg:path><svg:path stroke-linecap="round" d="M38 32V42"></svg:path><svg:rect width="8" height="16" x="20" y="14" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M24 4V14"></svg:path><svg:path stroke-linecap="round" d="M24 30V40"></svg:path></svg:g>`,
})
export class IconParkChartStockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
