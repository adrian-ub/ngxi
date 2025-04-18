import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsChartPie24pxIcon],svg[healthicons-chart-pie-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m8 10a8 8 0 0 1-14.252 4.991L19.45 9.08c.355.905.55 1.89.55 2.92m-7-7.938a8 8 0 0 1 5.492 3.262L13 10.494z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsChartPie24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
