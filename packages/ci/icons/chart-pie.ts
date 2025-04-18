import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciChartPieIcon],svg[ci-chart-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3a9 9 0 1 0 9 9m-9-9a9 9 0 0 1 9 9m-9-9v9m9 0h-9m6 6.5L12 12"></svg:path>`,
})
export class CiChartPieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
