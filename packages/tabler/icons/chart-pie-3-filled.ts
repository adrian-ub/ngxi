import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartPie3FilledIcon],svg[tabler-chart-pie-3-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 20.66a10 10 0 0 1-11.328-.917L12.414 13h9.536A10 10 0 0 1 17 20.66M11 2.05v9.534l-6.743 6.744A10 10 0 0 1 2 12l.005-.324A10 10 0 0 1 11 2.05m6 1.29A10 10 0 0 1 21.95 11H13V2.05a10 10 0 0 1 4 1.29"></svg:path>`,
})
export class TablerChartPie3FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
