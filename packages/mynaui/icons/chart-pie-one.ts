import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiChartPieOneIcon],svg[mynaui-chart-pie-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9h-9m0 9a9 9 0 1 1 0-18m0 18v-9m0-9v9"></svg:path>`,
})
export class MynauiChartPieOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
