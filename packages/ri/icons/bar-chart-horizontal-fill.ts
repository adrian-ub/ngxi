import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBarChartHorizontalFillIcon],svg[ri-bar-chart-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3v4H3V3zm4 14v4H3v-4zm6-7v4H3v-4z"></svg:path>`,
})
export class RiBarChartHorizontalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
