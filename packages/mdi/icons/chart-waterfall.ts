import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiChartWaterfallIcon],svg[mdi-chart-waterfall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h2v18h18v2H2zm15 0h3v16h-3zM6 11h3v7H6zm7-8h3v4h-3zm-3 5h3v4h-3z"></svg:path>`,
})
export class MdiChartWaterfallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
