import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentSearchIcon],svg[si-glyph-document-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10.031.031v3.938h3.871zm-3.539 8.99a2.478 2.478 0 0 0-2.049 3.867l-2.385 2.385l.707.707l2.398-2.398c.385.246.838.394 1.328.394a2.48 2.48 0 0 0 2.477-2.477a2.48 2.48 0 0 0-2.476-2.478m.024 4.078a1.58 1.58 0 0 1-1.578-1.578c0-.87.708-1.578 1.578-1.578a1.58 1.58 0 0 1 1.578 1.578a1.58 1.58 0 0 1-1.578 1.578"></svg:path><svg:path d="M9 5V0H2.042v13.876l1.059-1.059a3.6 3.6 0 0 1-.256-1.316a3.625 3.625 0 1 1 3.625 3.625c-.428 0-.832-.088-1.213-.223L4.222 16H14V5z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentSearchIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
