import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartPie4FilledIcon],svg[tabler-chart-pie-4-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.844 13.57l4.843 7.264a10 10 0 0 1-11.015-1.09zm6.507 6.154L13.87 13h8.081a10 10 0 0 1-3.348 6.511zM11.001 2.05v9.534l-6.744 6.744A10 10 0 0 1 2 12l.005-.324A10 10 0 0 1 11 2.05m6 1.29A10 10 0 0 1 21.95 11H13V2.05a10 10 0 0 1 4 1.29"></svg:path>`,
})
export class TablerChartPie4FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
