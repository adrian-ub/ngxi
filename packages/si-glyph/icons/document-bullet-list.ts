import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentBulletListIcon],svg[si-glyph-document-bullet-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10.031.031v3.938h3.871z"></svg:path><svg:path d="M9 5V0H2.042v16H14V5zM5 8H4V7h1zm0 2H4V9h1zm-.062 2h-1v-1h1zm1.02 0v-1h5v1zm5-2h-5V9h5zm0-2h-5V7h5z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentBulletListIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
