import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkScanSettingIcon],svg[icon-park-scan-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="38" x="5" y="5" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M34 21L37 24L34 27"></svg:path><svg:path stroke="#fff" d="M14 21L11 24L14 27"></svg:path><svg:path stroke="#fff" d="M27 14L24 11L21 14"></svg:path><svg:path stroke="#fff" d="M27 34L24 37L21 34"></svg:path></svg:g>`,
})
export class IconParkScanSettingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
