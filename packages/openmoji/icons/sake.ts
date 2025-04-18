import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSakeIcon],svg[openmoji-sake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiSake0" d="M34 66.636c10 .364 29.7 0 31 0C64 52 64 37 58 24M37.548 38.248c1.148-5.812 2.64-10.806 4.378-14.662l.207-.374m-4.585 15.036a121 121 0 0 0-1.267 7.788M18.04 51h16.33c0 6.952-2.286 12.776-7.116 15.68h-14.4C8.023 63.776 5.736 57.952 5.736 51zM64.37 8c0 6.778-2.173 12.483-6.758 15.456m-15.634-.354c-4.231-3.059-6.24-8.584-6.24-15.102"></svg:path></svg:defs><svg:g fill="#FFF"><svg:path d="M65 66.64c-1.3 0-22 .36-32 0C34 52 36 37 41 24l1-.82c-4.32-3.03-6.37-8.6-6.37-16.18h28.74c0 7.58-2.05 13.15-6.37 16.18V24c6 13 6 28 7 42.64"></svg:path><svg:use href="#openmojiSake0"></svg:use></svg:g><svg:use href="#openmojiSake0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:use>`,
})
export class OpenmojiSakeIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
