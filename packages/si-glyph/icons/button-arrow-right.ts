import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphButtonArrowRightIcon],svg[si-glyph-button-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M16.969 8.041c0 4.389-3.582 7.959-7.986 7.959c-4.4 0-7.982-3.57-7.982-7.959S4.583.082 8.983.082c4.404 0 7.986 3.57 7.986 7.959m-14 0c0 3.305 2.712 5.996 6.045 5.996s6.047-2.691 6.047-5.996s-2.713-5.996-6.047-5.996s-6.045 2.691-6.045 5.996"></svg:path><svg:path d="m9.057 10.969l3.904-3.002l-3.905-2.951v2.003H5.793c-.346 0-.791.324-.791.955c0 .63.483.975.826.975h3.229z"></svg:path></svg:g>`,
})
export class SiGlyphButtonArrowRightIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
