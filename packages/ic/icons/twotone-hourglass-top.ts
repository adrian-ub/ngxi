import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneHourglassTopIcon],svg[ic-twotone-hourglass-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="icTwotoneHourglassTop0" fill="currentColor" d="m8 7.5l4 4l4-4V4H8z"></svg:path></svg:defs><svg:use href="#icTwotoneHourglassTop0" opacity=".3"></svg:use><svg:use href="#icTwotoneHourglassTop0" opacity=".3"></svg:use><svg:path fill="currentColor" d="M18 2H6v6l4 4l-3.99 4.01L6 22h12l-.01-5.99L14 12l4-3.99zm-2 14.5V20H8v-3.5l4-4zm0-9l-4 4l-4-4V4h8z"></svg:path>`,
})
export class IcTwotoneHourglassTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
