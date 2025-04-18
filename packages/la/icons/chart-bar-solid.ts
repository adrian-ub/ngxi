import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laChartBarSolidIcon],svg[la-chart-bar-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4v24h8V4zm2 2h4v20h-4zM3 10v18h8V10zm2 2h4v14H5zm7 4v12h8V16zm2 2h4v8h-4z"></svg:path>`,
})
export class LaChartBarSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
