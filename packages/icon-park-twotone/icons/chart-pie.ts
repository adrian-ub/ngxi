import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneChartPieIcon],svg[icon-park-twotone-chart-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTChartPie0"><svg:g fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4v20z"></svg:path><svg:path d="M43.084 18H30V4.916A20.05 20.05 0 0 1 43.084 18"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTChartPie0)"></svg:path>`,
})
export class IconParkTwotoneChartPieIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
