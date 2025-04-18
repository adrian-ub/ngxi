import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamBarChartIcon],svg[jam-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0a1 1 0 0 1 1 1v14a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1m12 4a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1M7 8a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamBarChartIcon {
  readonly viewBox = input("-5 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
