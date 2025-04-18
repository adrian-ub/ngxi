import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxChartIcon],svg[bx-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2M5 5h14l.001 14H5z"></svg:path><svg:path fill="currentColor" d="m13.553 11.658l-4-2l-2.448 4.895l1.79.894l1.552-3.105l4 2l2.448-4.895l-1.79-.894z"></svg:path>`,
})
export class BxChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
