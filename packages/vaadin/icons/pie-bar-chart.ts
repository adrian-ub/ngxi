import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinPieBarChartIcon],svg[vaadin-pie-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 11h3v5H5zm-4 3h3v2H1zm12-2h3v4h-3zM9 9h3v7H9zM5 0a5 5 0 1 0 .001 10.001A5 5 0 0 0 5 0m0 9a4 4 0 0 1 0-8v4h4a4 4 0 0 1-4 4"></svg:path>`,
})
export class VaadinPieBarChartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
