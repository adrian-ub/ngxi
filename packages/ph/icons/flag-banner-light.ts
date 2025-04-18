import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFlagBannerLightIcon],svg[ph-flag-banner-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.07 52.8A6 6 0 0 0 232 50H40a6 6 0 0 0-4.24 10.24L79.51 104l-43.75 43.76A6 6 0 0 0 40 158h136.78l-30.2 63.42a6 6 0 0 0 10.84 5.16l80-168a6 6 0 0 0-.35-5.78M182.5 146h-128l37.75-37.76a6 6 0 0 0 0-8.48L54.49 62h168Z"></svg:path>`,
})
export class PhFlagBannerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
