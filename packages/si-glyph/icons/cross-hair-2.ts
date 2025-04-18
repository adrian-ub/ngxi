import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphCrossHair2Icon],svg[si-glyph-cross-hair-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.979 10c1.093 0 1.979-.962 1.979-2.043c0-1.08-.886-1.957-1.979-1.957A1.97 1.97 0 0 0 7 7.957C7 9.037 7.886 10 8.979 10M8 0h1.986v4H8zm0 12v4.003h2.007V12zM1 7h3.984v1.969H1zm12 0v1.928h3.99V7z"></svg:path>`,
})
export class SiGlyphCrossHair2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
