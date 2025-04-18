import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiChartBarIcon],svg[gravity-ui-chart-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiChartBar0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M6 4v1a.5.5 0 0 1-.5.5h-3A.5.5 0 0 1 2 5V4a.5.5 0 0 1 .5-.5h3A.5.5 0 0 1 6 4M2 7.5v1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5M2 11v1a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5m-1.5.503V4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1q0 .26-.063.5H9.5a2 2 0 0 1 2 2v1q0 .26-.063.5H13.5a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiChartBar0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiChartBarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
