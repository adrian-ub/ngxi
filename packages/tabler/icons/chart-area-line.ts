import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartAreaLineIcon],svg[tabler-chart-area-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 19l4-6l4 2l4-5l4 4v5zm0-7l3-4l4 2l5-6l4 4"></svg:path>`,
})
export class TablerChartAreaLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
