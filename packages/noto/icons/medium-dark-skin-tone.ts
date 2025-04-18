import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoMediumDarkSkinToneIcon],svg[noto-medium-dark-skin-tone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:lineargradient id="ssvg-id-medium-dark-skin-tonea" x1="64" x2="64" y1="4.333" y2="123.89" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#A56C43" offset="0"></svg:stop><svg:stop stop-color="#A26941" offset=".427"></svg:stop><svg:stop stop-color="#97603D" offset=".784"></svg:stop><svg:stop stop-color="#8D5738" offset="1"></svg:stop></svg:lineargradient><svg:path fill="url(#ssvg-id-medium-dark-skin-tonea)" d="M4 4h120v120H4z"></svg:path><svg:lineargradient id="ssvg-id-medium-dark-skin-toneb" x1="106" x2="106" y1="305.27" y2="305.27" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#8D5738" offset="0"></svg:stop><svg:stop stop-color="#97603D" offset=".216"></svg:stop><svg:stop stop-color="#A26941" offset=".573"></svg:stop><svg:stop stop-color="#A56C43" offset="1"></svg:stop></svg:lineargradient>`,
})
export class NotoMediumDarkSkinToneIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
