import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoMediumSkinToneIcon],svg[noto-medium-skin-tone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:lineargradient id="ssvg-id-medium-skin-tonea" x1="64" x2="64" y1="3.667" y2="123.67" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#BA8D68" offset="0"></svg:stop><svg:stop stop-color="#B78A67" offset=".449"></svg:stop><svg:stop stop-color="#AD8264" offset=".809"></svg:stop><svg:stop stop-color="#A47B62" offset="1"></svg:stop></svg:lineargradient><svg:path fill="url(#ssvg-id-medium-skin-tonea)" d="M4 4h120v120H4z"></svg:path>`,
})
export class NotoMediumSkinToneIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
