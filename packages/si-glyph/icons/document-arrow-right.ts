import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentArrowRightIcon],svg[si-glyph-document-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10 4h4l-4-4z"></svg:path><svg:path d="M9 5.042v-5H3v11.403l3.583 3.138l-1.971 1.396H14V5.042z"></svg:path><svg:path d="m3.084 13.004l.003 1H1.043v.975h2.05l.004.979l1.845-1.452z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentArrowRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
