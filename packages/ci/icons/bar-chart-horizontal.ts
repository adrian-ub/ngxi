import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciBarChartHorizontalIcon],svg[ci-bar-chart-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22H2V2h2v20Zm11-1H5v-3h10v3Zm3-5H5v-3h13v3Zm3-5H5V8h16v3Zm-8-5H5V3h8v3Z"></svg:path>`,
})
export class CiBarChartHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
