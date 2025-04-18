import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphPinMapIcon],svg[si-glyph-pin-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M11.953 8.979H6.025V7.668L7 6.991V4.926l-.975-.804V2.021h5.928v2.228l-.974.677v2.065l.975.634z"></svg:path><svg:path d="M9.986 7.993H8.038v2.614l.989 5.372l.959-5.372zM6 0h5.959v.942H6z"></svg:path></svg:g>`,
})
export class SiGlyphPinMapIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
