import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentWarningIcon],svg[si-glyph-document-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10.031.031v3.938h3.871z"></svg:path><svg:path d="M8.994 0H3.042v16h11V5l-5.048.064zM4.958 13l3.48-7l3.52 7z"></svg:path><svg:path d="M8 8v2.015h.977V8zm0 3h.875v1H8z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentWarningIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
