import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentPlusIcon],svg[si-glyph-document-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.927.062L4.073.114l-.021 9.833l1.969.015v2.017H8v3.083H6.062V16h9.907V6.012H9.927z"></svg:path><svg:path d="M11 0v4.969h5zM6.979 13H4.992v-2h-.963v2H2.021v.986h2.008v2.008h.963v-2.008h1.987z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentPlusIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
