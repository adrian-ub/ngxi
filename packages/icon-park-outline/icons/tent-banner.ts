import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTentBannerIcon],svg[icon-park-outline-tent-banner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M7 43h32L23 17z"></svg:path><svg:path d="M18.077 25L23 28l4.923-3M23 17V4m12 0H23v8h12l-3-4z"></svg:path></svg:g>`,
})
export class IconParkOutlineTentBannerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
