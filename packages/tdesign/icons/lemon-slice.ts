import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLemonSliceIcon],svg[tdesign-lemon-slice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.995.59L1.59 16.996l.697.707c1.04 1.056 2.523 2.117 4.125 2.918C8.007 21.416 9.81 22 11.488 22a11.48 11.48 0 0 0 8.14-3.372A11.48 11.48 0 0 0 23 10.488c0-1.678-.584-3.481-1.38-5.075c-.8-1.603-1.862-3.085-2.918-4.126zm2.904 8.8l-8.172-.703l5.243-5.243a15 15 0 0 1 1.861 2.863c.519 1.038.897 2.101 1.068 3.083m-7.754 1.34l7.812.672a9.46 9.46 0 0 1-2.073 5.068zm4.325 7.154a9.46 9.46 0 0 1-5.068 2.072l-.671-7.811zm-7.782-6.158l.702 8.173c-.982-.171-2.045-.55-3.083-1.068a15 15 0 0 1-2.862-1.861z"></svg:path>`,
})
export class TdesignLemonSliceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
