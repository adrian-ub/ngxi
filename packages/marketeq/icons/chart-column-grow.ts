import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqChartColumnGrowIcon],svg[marketeq-chart-column-grow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M6.25 25c8.333 0 27.083-4.167 35.417-18.75"></svg:path><svg:path stroke="#344054" d="M33.333 6.25h8.334l2.083 8.333"></svg:path><svg:path stroke="#306CFE" d="M12.5 43.75H6.25v-8.333h6.25zm16.667-12.5h-6.25v12.5h6.25zm16.666-8.333h-6.25V43.75h6.25z"></svg:path></svg:g>`,
})
export class MarketeqChartColumnGrowIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
