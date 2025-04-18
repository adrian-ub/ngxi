import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsChartPieOutline24pxIcon],svg[healthicons-chart-pie-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-2a8 8 0 0 0 7.45-10.92L5.748 16.99A7.99 7.99 0 0 0 12 20m1-9.505l5.492-3.171A8 8 0 0 0 13 4.062zm-2 1.154V4.062a8 8 0 0 0-6.297 11.223z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsChartPieOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
