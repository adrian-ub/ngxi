import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiChartAreaStackedNormalizedIcon],svg[gravity-ui-chart-area-stacked-normalized-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiChartAreaStackedNormalized0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 12.5h-11A.5.5 0 0 1 2 12v-1.611l2.812-1.985a1.25 1.25 0 0 1 1.414-.019l1.753 1.169a2.75 2.75 0 0 0 3.757-.681L14 5.728V12a.5.5 0 0 1-.5.5m.22-8.95l-3.201 4.446a1.25 1.25 0 0 1-1.708.31L7.058 7.137a2.75 2.75 0 0 0-3.111.042L2 8.553V4a.5.5 0 0 1 .5-.5h11q.119.001.22.05M.5 9.992V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V9.991" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiChartAreaStackedNormalized0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiChartAreaStackedNormalizedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
