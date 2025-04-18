import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChartLineMultiIcon],svg[tdesign-chart-line-multi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v18h18v2H2V2zm17.914 3.5L15.5 11.914l-4-4l-5 5L5.086 11.5L11.5 5.086l4 4l5-5zm0 5L15.5 16.914l-4-4l-5 5L5.086 16.5l6.414-6.414l4 4l5-5z"></svg:path>`,
})
export class TdesignChartLineMultiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
