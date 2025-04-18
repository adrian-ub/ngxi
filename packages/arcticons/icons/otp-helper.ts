import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOtpHelperIcon],svg[arcticons-otp-helper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 19.262V16.84m0 2.422l-1.48 1.749m-.673-3.095L24 19.262m0 0l1.48 1.749m.673-3.095L24 19.262m6.521 0V16.84m0 2.422l-1.48 1.749m-.673-3.095l2.153 1.346m0 0l1.48 1.749m.673-3.095l-2.153 1.346m-13.042 0V16.84m0 2.422l-1.48 1.749m-.673-3.095l2.153 1.346m0 0l1.48 1.749m.673-3.095l-2.153 1.346m17.34 11.898l8.681-6.677l-8.681-6.676M13.181 31.16L4.5 24.483l8.681-6.676"></svg:path>`,
})
export class ArcticonsOtpHelperIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
