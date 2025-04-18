import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTentBannerIcon],svg[icon-park-tent-banner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M7 43H39L23 17L7 43Z"></svg:path><svg:path d="M18.0769 25L23 28L27.9231 25"></svg:path><svg:path d="M23 17V12V4"></svg:path><svg:path fill="#2F88FF" d="M35 4H23V12H35L32 8L35 4Z"></svg:path></svg:g>`,
})
export class IconParkTentBannerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
