import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChartBarHorizontalBoldIcon],svg[ph-chart-bar-horizontal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 92h-36V56a12 12 0 0 0-12-12H60v-4a12 12 0 0 0-24 0v176a12 12 0 0 0 24 0v-4h84a12 12 0 0 0 12-12v-36h68a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12m-60-24v24H60V68Zm-32 120H60v-24h72Zm80-48H60v-24h152Z"></svg:path>`,
})
export class PhChartBarHorizontalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
