import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqChartColumIcon],svg[marketeq-chart-colum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M28.125 6.25h-6.25v37.5h6.25z"></svg:path><svg:path stroke="#306CFE" d="M12.5 43.75H6.25V25h6.25zm31.25-29.167H37.5V43.75h6.25z"></svg:path></svg:g>`,
})
export class MarketeqChartColumIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
