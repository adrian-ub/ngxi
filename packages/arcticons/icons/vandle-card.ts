import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVandleCardIcon],svg[arcticons-vandle-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 36.616c3.424 0 6.86.701 10.939.701c4.728 0 8.561-5.962 8.561-13.317s-3.833-13.317-8.561-13.317c-4.08 0-7.515.701-10.939.701s-6.86-.701-10.939-.701C8.333 10.683 4.5 16.645 4.5 24s3.833 13.317 8.561 13.317c4.08 0 7.515-.701 10.939-.701M13.5 21.25h21"></svg:path>`,
})
export class ArcticonsVandleCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
