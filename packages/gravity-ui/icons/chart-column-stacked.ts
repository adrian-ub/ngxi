import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiChartColumnStackedIcon],svg[gravity-ui-chart-column-stacked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiChartColumnStacked0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M11 4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm-2 8.5a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5zm-4.5 0A.5.5 0 0 0 5 12v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5zM2 7.5V4a.5.5 0 0 1 .5-.5h2A.5.5 0 0 1 5 4v3.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5m5-4h2a.5.5 0 0 1 .5.5v.5A.5.5 0 0 1 9 5H7a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5M7 2H2.5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiChartColumnStacked0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiChartColumnStackedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
