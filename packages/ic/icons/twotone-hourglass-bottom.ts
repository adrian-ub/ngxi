import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneHourglassBottomIcon],svg[ic-twotone-hourglass-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="icTwotoneHourglassBottom0" fill="currentColor" d="m16 16.5l-4-4l-4 4V20h8z"></svg:path></svg:defs><svg:use href="#icTwotoneHourglassBottom0" opacity=".3"></svg:use><svg:use href="#icTwotoneHourglassBottom0" opacity=".3"></svg:use><svg:path fill="currentColor" d="M6 22h12v-6l-4-4l3.99-4.01L18 2H6l.01 5.99L10 12l-4 3.99zM8 7.5V4h8v3.5l-4 4zm0 9l4-4l4 4V20H8z"></svg:path>`,
})
export class IcTwotoneHourglassBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
