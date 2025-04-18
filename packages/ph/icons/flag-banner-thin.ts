import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFlagBannerThinIcon],svg[ph-flag-banner-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.38 53.86A4 4 0 0 0 232 52H40a4 4 0 0 0-2.83 6.83L82.34 104l-45.17 45.17A4 4 0 0 0 40 156h140l-31.56 66.28a4 4 0 0 0 1.89 5.33a3.9 3.9 0 0 0 1.67.39a4 4 0 0 0 3.61-2.28l80-168a4 4 0 0 0-.23-3.86M183.76 148H49.66l41.17-41.17a4 4 0 0 0 0-5.66L49.66 60h176Z"></svg:path>`,
})
export class PhFlagBannerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
