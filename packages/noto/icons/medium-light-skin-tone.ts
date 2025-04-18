import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoMediumLightSkinToneIcon],svg[noto-medium-light-skin-tone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:lineargradient id="ssvg-id-medium-light-skin-tonea" x1="64" x2="64" y1="5" y2="123.6" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E0BB95" offset="0"></svg:stop><svg:stop stop-color="#DEB892" offset=".411"></svg:stop><svg:stop stop-color="#D6B088" offset=".743"></svg:stop><svg:stop stop-color="#CCA47A" offset="1"></svg:stop></svg:lineargradient><svg:path fill="url(#ssvg-id-medium-light-skin-tonea)" d="M4 4h120v120H4z"></svg:path>`,
})
export class NotoMediumLightSkinToneIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
