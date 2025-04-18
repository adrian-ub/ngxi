import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChartStackedFilledIcon],svg[tdesign-chart-stacked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V2H2v20h20v-2h-2v-3.5h-6V20h-2v-3.5H6V20z"></svg:path><svg:path fill="currentColor" d="M6 14.5h6V9H6zm8 0h6V5h-6z"></svg:path>`,
})
export class TdesignChartStackedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
