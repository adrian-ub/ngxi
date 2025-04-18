import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiTimeIntervalIcon],svg[zmdi-time-interval-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M303.5 125.5Q341 163 341 216t-37.5 90.5T213 344t-90-38l90-90V88q53 0 90.5 37.5M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3m0 384q70.5 0 120.5-50t50-121t-50-121t-120.5-50T93 95T43 216t50 121t120.5 50"></svg:path>`,
})
export class ZmdiTimeIntervalIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
