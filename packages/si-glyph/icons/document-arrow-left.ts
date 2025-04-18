import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentArrowLeftIcon],svg[si-glyph-document-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10 0v4h4z"></svg:path><svg:path d="M9 5V.042H3.033v11.02L4 10.258v1.659L6 12v3.042H4v.937h9.98V5z"></svg:path><svg:path d="m2.9 12.004l-.003 1h2.044v.975H2.892l-.004.979l-1.846-1.452z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentArrowLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
