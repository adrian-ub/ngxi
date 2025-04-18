import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoLightSkinToneIcon],svg[noto-light-skin-tone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:lineargradient id="ssvg-id-light-skin-tonea" x1="64" x2="64" y1="4.5" y2="123.82" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F9DDBD" offset="0"></svg:stop><svg:stop stop-color="#FADCBA" offset=".37"></svg:stop><svg:stop stop-color="#FCD8AF" offset=".684"></svg:stop><svg:stop stop-color="#FFD39E" offset=".976"></svg:stop><svg:stop stop-color="#FFD29C" offset="1"></svg:stop></svg:lineargradient><svg:path fill="url(#ssvg-id-light-skin-tonea)" d="M4 4h120v120H4z"></svg:path>`,
})
export class NotoLightSkinToneIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
