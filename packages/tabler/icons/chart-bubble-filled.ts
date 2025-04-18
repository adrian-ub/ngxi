import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartBubbleFilledIcon],svg[tabler-chart-bubble-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12a4 4 0 1 1-3.995 4.2L2 16l.005-.2A4 4 0 0 1 6 12m10 4a3 3 0 1 1-2.995 3.176L13 19l.005-.176A3 3 0 0 1 16 16M14.5 2a5.5 5.5 0 1 1-5.496 5.721L9 7.5l.004-.221A5.5 5.5 0 0 1 14.5 2"></svg:path>`,
})
export class TablerChartBubbleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
