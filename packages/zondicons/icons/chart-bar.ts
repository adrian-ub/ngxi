import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsChartBarIcon],svg[zondicons-chart-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 10h3v10H1zM6 0h3v20H6zm5 8h3v12h-3zm5-4h3v16h-3z"></svg:path>`,
})
export class ZondiconsChartBarIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
