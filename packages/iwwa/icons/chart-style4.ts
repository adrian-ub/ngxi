import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iwwaChartStyle4Icon],svg[iwwa-chart-style4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.978 25.24h8.156v8.739H6.978zm0-9.904h8.156v8.739H6.978zm9.323 2.331h8.156v16.312h-8.156zm0-6.991h8.156v5.826h-8.156zm9.322-4.661h8.156v27.964h-8.156z"></svg:path>`,
})
export class IwwaChartStyle4Icon {
  readonly viewBox = input("0 0 40 40")
  readonly width = input("1em")
  readonly height = input("1em")
}
