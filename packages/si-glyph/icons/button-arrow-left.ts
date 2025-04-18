import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphButtonArrowLeftIcon],svg[si-glyph-button-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M1 8.041C1 3.652 4.582.082 8.985.082c4.401 0 7.983 3.57 7.983 7.959S13.386 16 8.985 16C4.582 16 1 12.43 1 8.041m14.057 0c0-3.333-2.715-6.045-6.051-6.045S2.954 4.708 2.954 8.041s2.716 6.045 6.052 6.045c3.337 0 6.051-2.712 6.051-6.045"></svg:path><svg:path d="M8.975 5.02L5.071 8.022l3.905 2.951V8.97h3.14c.345 0 .791-.324.791-.955c0-.63-.483-.975-.826-.975H8.976V5.02z"></svg:path></svg:g>`,
})
export class SiGlyphButtonArrowLeftIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
