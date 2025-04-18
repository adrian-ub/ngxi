import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phClockCountdownFillIcon],svg[ph-clock-countdown-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 96a12 12 0 1 1 12 12a12 12 0 0 1-12-12m-12-24a12 12 0 1 0-12-12a12 12 0 0 0 12 12m28.66 56a8 8 0 0 0-8.63 7.31A88.12 88.12 0 1 1 120.66 40a8 8 0 0 0-1.32-16A104.12 104.12 0 1 0 232 136.66a8 8 0 0 0-7.34-8.66M128 56a72 72 0 1 1-72 72a72.08 72.08 0 0 1 72-72m-8 72a8 8 0 0 0 8 8h48a8 8 0 0 0 0-16h-40V80a8 8 0 0 0-16 0Zm40-80a12 12 0 1 0-12-12a12 12 0 0 0 12 12"></svg:path>`,
})
export class PhClockCountdownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
