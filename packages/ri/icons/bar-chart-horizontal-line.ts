import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBarChartHorizontalLineIcon],svg[ri-bar-chart-horizontal-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3v2H3V3zm4 16v2H3v-2zm6-8v2H3v-2z"></svg:path>`,
})
export class RiBarChartHorizontalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
