import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChartBreakoutCircleIcon],svg[hugeicons-chart-breakout-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 3.385V2m3.63 2.364l.978-.98M20.618 8H22m0 4c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2"></svg:path><svg:path d="M11.853 8.007h3.222c.379 0 .686.315.686.703v3.325m-13 1.923c2.273.266 7.977-.444 12.131-5.068"></svg:path></svg:g>`,
})
export class HugeiconsChartBreakoutCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
