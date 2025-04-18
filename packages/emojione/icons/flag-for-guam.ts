import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForGuamIcon],svg[emojione-flag-for-guam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2a5f9e" d="M2 32c0 9.8 4.7 18.5 12 24h36c7.3-5.5 12-14.2 12-24S57.3 13.5 50 8H14C6.7 13.5 2 22.2 2 32"></svg:path><svg:path fill="#ed4c5c" d="M14 8h36c-5-3.8-11.2-6-18-6S19 4.2 14 8m18 54c6.8 0 13-2.2 18-6H14c5 3.8 11.2 6 18 6m11.5-30C43.5 42.2 32 50.5 32 50.5S20.5 42.2 20.5 32S32 13.5 32 13.5S43.5 21.8 43.5 32"></svg:path><svg:path id="emojioneFlagForGuam0" fill="#b4d7ee" d="M42 32c0 8.8-10 16-10 16s-10-7.2-10-16s10-16 10-16s10 7.2 10 16"></svg:path><svg:use href="#emojioneFlagForGuam0"></svg:use><svg:path fill="#ffe62e" d="M26.6 39.4C29 42.8 32 45 32 45s8-5.8 8-13c-3.8 3.4-8.3 6-13.4 7.4"></svg:path><svg:path fill="#428bc1" d="M24 32c0 2.8 1.2 5.3 2.6 7.4c5.1-1.4 9.6-4 13.4-7.4z"></svg:path><svg:path fill="#fff" d="M28 30v4h4z"></svg:path><svg:path fill="#89664c" d="M34.9 39c-3.8-6.8-3.3-13.7-3.3-14l.8.1c0 .1-.5 6.9 3.1 13.4z"></svg:path><svg:path fill="#83bf4f" d="m32 22.2l2.5-2.2l-.8 3.1l3.3.9l-3.3.9l.8 3.1l-2.5-2.2l-2.5 2.2l.8-3.1L27 24l3.3-.9l-.8-3.1z"></svg:path>`,
})
export class EmojioneFlagForGuamIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
