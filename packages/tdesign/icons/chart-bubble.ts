import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChartBubbleIcon],svg[tdesign-chart-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v18h18v2H2V2zm12 3a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-3 6a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0m11 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path>`,
})
export class TdesignChartBubbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
