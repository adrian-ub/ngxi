import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChartBubble02Icon],svg[hugeicons-chart-bubble-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="5" cy="7" r="3"></svg:circle><svg:circle cx="8" cy="18" r="4"></svg:circle><svg:circle cx="17" cy="7" r="5"></svg:circle></svg:g>`,
})
export class HugeiconsChartBubble02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
