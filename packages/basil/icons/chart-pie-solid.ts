import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilChartPieSolidIcon],svg[basil-chart-pie-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 2.745c0-.116-.1-.208-.216-.196A9.5 9.5 0 0 0 2.5 12a9.5 9.5 0 0 0 16.243 6.692a.197.197 0 0 0-.017-.292l-7.197-5.817A.75.75 0 0 1 11.25 12z"></svg:path><svg:path fill="currentColor" d="M19.67 17.234c.09.073.224.054.288-.044a9.45 9.45 0 0 0 1.494-4.225a.197.197 0 0 0-.197-.215h-6.568a.2.2 0 0 0-.126.355zm1.585-5.984c.116 0 .208-.1.197-.216a9.5 9.5 0 0 0-8.486-8.486a.197.197 0 0 0-.216.197v8.205a.3.3 0 0 0 .3.3z"></svg:path>`,
})
export class BasilChartPieSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
