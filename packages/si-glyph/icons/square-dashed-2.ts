import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphSquareDashed2Icon],svg[si-glyph-square-dashed-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 .834h5.083v5.041h.834V0H10zM.834 5.875V.834h5.083V0H0v5.875zm14.249 4.25v5.041H10V16h5.917v-5.875zm-9.166 5.041H.834v-5.041H0V16h5.917z"></svg:path>`,
})
export class SiGlyphSquareDashed2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
