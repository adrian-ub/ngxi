import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChartMinimumIcon],svg[hugeicons-chart-minimum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 21H10c-3.3 0-4.95 0-5.975-1.025S3 17.3 3 14V3"></svg:path><svg:path d="M8 3c0 6.075 2.686 11 6 11s6-4.925 6-11M6 17h.009m2.99 0h.008m2.99 0h.008m2.99 0h.009m2.989 0h.009m2.989 0H21"></svg:path></svg:g>`,
})
export class HugeiconsChartMinimumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
