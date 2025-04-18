import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiChartBubbleSolidIcon],svg[mynaui-chart-bubble-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 5.613a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5M8 2.25a5.75 5.75 0 1 0 0 11.5a5.75 5.75 0 0 0 0-11.5m7.469 11a4.25 4.25 0 1 0 0 8.5a4.25 4.25 0 0 0 0-8.5"></svg:path>`,
})
export class MynauiChartBubbleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
