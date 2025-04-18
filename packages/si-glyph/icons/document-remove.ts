import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentRemoveIcon],svg[si-glyph-document-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M15.969 16V6.012H10V.062L4 0v14l4-.031V16z"></svg:path><svg:path d="M11 0v4.969h4.917zM2 15v.937h4.99V15z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentRemoveIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
