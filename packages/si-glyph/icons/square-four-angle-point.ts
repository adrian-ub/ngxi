import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphSquareFourAnglePointIcon],svg[si-glyph-square-four-angle-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.959 3V.041H13v1.021H2.959V.041H0V3h1.011v10.041H0V16h2.959v-1.021H13V16h2.959v-2.959h-1.031V3zM13.938.938h1.084v1.125h-1.084zm-13 0h1.084v1.125H.938zm1.083 14.124H.937v-1.125h.073v.011h.917v-.011h.094zm13-1.124v1.125h-1.084v-1.125h.073v.011h.917v-.011zm-1.01-.897H13v1.021H2.959v-1.021H1.928V3h1.031V1.979H13V3h1.011z"></svg:path>`,
})
export class SiGlyphSquareFourAnglePointIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
