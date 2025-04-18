import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBarChartBoxFillIcon],svg[ri-bar-chart-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m4 10v4h2v-4zm4-6v10h2V7zm4 3v7h2v-7z"></svg:path>`,
})
export class RiBarChartBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
