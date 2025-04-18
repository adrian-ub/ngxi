import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkChartHistogramOneIcon],svg[icon-park-chart-histogram-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 6V42H42"></svg:path><svg:path d="M18 34H14"></svg:path><svg:path d="M26 26H14"></svg:path><svg:path d="M42 18H14"></svg:path><svg:path d="M34 10L14 10"></svg:path></svg:g>`,
})
export class IconParkChartHistogramOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
