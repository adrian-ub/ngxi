import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkChartHistogramIcon],svg[icon-park-chart-histogram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 6V42H42"></svg:path><svg:path d="M14 30V34"></svg:path><svg:path d="M22 22V34"></svg:path><svg:path d="M30 6V34"></svg:path><svg:path d="M38 14V34"></svg:path></svg:g>`,
})
export class IconParkChartHistogramIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
