import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiChartIcon],svg[ooui-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3H1v16h18v-2H3z"></svg:path><svg:path fill="currentColor" d="M11 11L8 9l-4 4v3h14V5z"></svg:path>`,
})
export class OouiChartIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
