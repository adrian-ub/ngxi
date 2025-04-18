import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiChartBubbleIcon],svg[mynaui-chart-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 8.863a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M13 8A5 5 0 1 1 3 8a5 5 0 0 1 10 0m5.969 9.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path>`,
})
export class MynauiChartBubbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
