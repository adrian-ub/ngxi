import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentIcon],svg[si-glyph-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M2 0v16h13V4.024L9 4V.062zm11 13H4v-1h9zm0-2H4v-1h9zm0-4v1H4V7z"></svg:path><svg:path d="M10 0v2.844h4.752z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
