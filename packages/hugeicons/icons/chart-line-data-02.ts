import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChartLineData02Icon],svg[hugeicons-chart-line-data-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="8.5" cy="10.5" r="1.5"></svg:circle><svg:circle cx="14.5" cy="15.5" r="1.5"></svg:circle><svg:circle cx="18.5" cy="7.5" r="1.5"></svg:circle><svg:path d="M15.434 14.296L18 9m-8.417 2.568l3.62 2.728M3 19l4.59-7.12M20 21H9c-3.3 0-4.95 0-5.975-1.025S2 17.3 2 14V3"></svg:path></svg:g>`,
})
export class HugeiconsChartLineData02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
