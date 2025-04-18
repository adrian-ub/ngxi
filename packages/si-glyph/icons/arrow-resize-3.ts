import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowResize3Icon],svg[si-glyph-arrow-resize-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.995 1.852L14.133.008l-3.026 2.98L9.062.972v5.903h5.987l-2.076-2.047zM.961 9.008l2.097 2.087l-3.053 3.033l1.88 1.88l3.057-3.038l1.967 1.996V9.008z"></svg:path>`,
})
export class SiGlyphArrowResize3Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
