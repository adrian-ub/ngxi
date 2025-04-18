import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiChartPieIcon],svg[gravity-ui-chart-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.45 8.75a5.501 5.501 0 1 1-6.2-6.2V8c0 .414.336.75.75.75zm0-1.5h-4.7v-4.7a5.5 5.5 0 0 1 4.7 4.7M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiChartPieIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
