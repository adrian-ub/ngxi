import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartBubbleIcon],svg[tabler-chart-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 16a3 3 0 1 0 6 0a3 3 0 1 0-6 0m11 3a2 2 0 1 0 4 0a2 2 0 1 0-4 0M10 7.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0"></svg:path>`,
})
export class TablerChartBubbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
