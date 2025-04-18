import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphLineTwoAnglePointIcon],svg[si-glyph-line-two-angle-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.938.938h1.084v1.125H7.938zm1.083 14.124H7.937v-1.125h.073v.011h.917v-.011h.094zm.938-2.021H8.928V3h1.031V.041H7V3h1.011v10.041H7V16h2.959z"></svg:path>`,
})
export class SiGlyphLineTwoAnglePointIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
