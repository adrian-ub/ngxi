import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqChartPieIcon],svg[marketeq-chart-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M32.354 38.792a14.98 14.98 0 1 1-11.52-25.021"></svg:path><svg:path stroke="#306CFE" d="M20.833 29.167V6.25A23.04 23.04 0 0 1 43.75 29.167a22.92 22.92 0 0 1-5.333 14.687z"></svg:path></svg:g>`,
})
export class MarketeqChartPieIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
