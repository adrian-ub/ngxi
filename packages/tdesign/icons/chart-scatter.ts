import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChartScatterIcon],svg[tdesign-chart-scatter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v18h18v2H2V2zm13 4a2 2 0 1 1 4 0a2 2 0 0 1-4 0m-6.002-1h2.004v2.004h-2.004zm-5 3h2.004v2.004H5.998zm9 2h2.004v2.004h-2.004zM9 13a2 2 0 1 1 4 0a2 2 0 0 1-4 0m7.998 2h2.004v2.004h-2.004zm-11 1h2.004v2.004H5.998z"></svg:path>`,
})
export class TdesignChartScatterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
