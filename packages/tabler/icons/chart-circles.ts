import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartCirclesIcon],svg[tabler-chart-circles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 9.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0"></svg:path><svg:path d="M9 14.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0"></svg:path></svg:g>`,
})
export class TablerChartCirclesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
