import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFlagBannerFillIcon],svg[ph-flag-banner-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m239.22 59.44l-45.63 95.82a4 4 0 0 1-.16.34l-34.21 71.84a8 8 0 1 1-14.44-6.88L173.62 160H40a8 8 0 0 1-5.66-13.66L76.69 104L34.34 61.66A8 8 0 0 1 40 48h192a8 8 0 0 1 7.22 11.44"></svg:path>`,
})
export class PhFlagBannerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
