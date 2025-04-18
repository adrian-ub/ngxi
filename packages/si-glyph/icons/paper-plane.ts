import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphPaperPlaneIcon],svg[si-glyph-paper-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m17 1.042l-5.564 13.912l-3.478-3.477l.695 2.086l-1.623 1.395v-3.395l7.954-8.188l-8.937 6.594L1 8.694z"></svg:path>`,
})
export class SiGlyphPaperPlaneIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
