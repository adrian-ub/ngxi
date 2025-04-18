import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChartBubble01Icon],svg[hugeicons-chart-bubble-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 21H10c-3.3 0-4.95 0-5.975-1.025S3 17.3 3 14V3"></svg:path><svg:circle cx="8" cy="8" r="2"></svg:circle><svg:circle cx="11.5" cy="15.5" r="2.5"></svg:circle><svg:circle cx="17.5" cy="7.5" r="3.5"></svg:circle></svg:g>`,
})
export class HugeiconsChartBubble01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
