import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoDarkSkinToneIcon],svg[noto-dark-skin-tone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:lineargradient id="ssvg-id-dark-skin-tonea" x1="64" x2="64" y1="4.37" y2="123.52" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#70534A" offset="0"></svg:stop><svg:stop stop-color="#6D5047" offset=".467"></svg:stop><svg:stop stop-color="#63463D" offset=".842"></svg:stop><svg:stop stop-color="#5C4037" offset="1"></svg:stop></svg:lineargradient><svg:path fill="url(#ssvg-id-dark-skin-tonea)" d="M4 4h120v120H4z"></svg:path>`,
})
export class NotoDarkSkinToneIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
