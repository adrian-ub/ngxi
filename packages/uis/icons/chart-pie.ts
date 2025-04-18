import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisChartPieIcon],svg[uis-chart-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 2c4 0 7.4 3 7.9 7H12zm4 14.9L12.6 13H20c-.4 2.5-1.8 4.7-4 5.9"></svg:path>`,
})
export class UisChartPieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
