import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaPieChartOutlineIcon],svg[eva-pie-chart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1a9 9 0 0 0-9-9m1 8V4.07A7 7 0 0 1 19.93 10Z"></svg:path><svg:path fill="currentColor" d="M20.82 14.06a1 1 0 0 0-1.28.61A8 8 0 1 1 9.33 4.46a1 1 0 0 0-.66-1.89a10 10 0 1 0 12.76 12.76a1 1 0 0 0-.61-1.27"></svg:path>`,
})
export class EvaPieChartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
