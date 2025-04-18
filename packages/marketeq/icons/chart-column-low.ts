import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqChartColumnLowIcon],svg[marketeq-chart-column-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M12.5 6.25c7.208 12.02 22.75 16.104 31.25 16.667"></svg:path><svg:path stroke="#344054" d="m41.667 16.667l2.083 6.25l-6.25 4.166"></svg:path><svg:path stroke="#306CFE" d="M39.583 35.417h6.25v8.333h-6.25zM22.917 43.75h6.25v-12.5h-6.25zm-16.667 0h6.25V22.917H6.25z"></svg:path></svg:g>`,
})
export class MarketeqChartColumnLowIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
