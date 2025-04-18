import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartDots3Icon],svg[tabler-chart-dots-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0m11 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0m1-9a3 3 0 1 0 6 0a3 3 0 1 0-6 0M3 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0m6-1l5-1.5m-7.5-7l7.81 5.37M7 7l8-1"></svg:path>`,
})
export class TablerChartDots3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
