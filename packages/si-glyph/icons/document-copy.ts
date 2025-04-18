import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentCopyIcon],svg[si-glyph-document-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10.02.062H5.026V13h10.991V2.991h-5.995V.062zM6.998 10.096V8.937l7.02.096v.997zm.014-2.12v-.97h7.02v.97zm7.005-1.945H6.96V4.938h7.056z"></svg:path><svg:path d="M11.06.062v1.844h4.752zm-8.997 2V16h10.886v-2.021H3.945V2.062z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentCopyIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
