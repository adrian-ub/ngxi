import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowResize2Icon],svg[si-glyph-arrow-resize-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5.075 6.95l1.843-1.862l-2.98-3.026L5.955.018H.052v5.986l2.046-2.076zm10.928 2.966l-2.171 2.097l-3.033-3.053l-1.881 1.881l3.039 3.056l-1.996 2.084h6.042z"></svg:path>`,
})
export class SiGlyphArrowResize2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
