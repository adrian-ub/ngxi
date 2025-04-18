import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChartDecreaseIcon],svg[hugeicons-chart-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21H10c-3.3 0-4.95 0-5.975-1.025S3 17.3 3 14V3m3.997 2.999c3.532 0 10.915 1.464 10.7 10.566m-2.208-1.61l1.883 1.897a.497.497 0 0 0 .703.003l1.922-1.9" color="currentColor"></svg:path>`,
})
export class HugeiconsChartDecreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
