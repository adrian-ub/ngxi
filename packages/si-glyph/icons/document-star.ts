import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentStarIcon],svg[si-glyph-document-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8 .058L2.008 0v15.954H14V5H7.977C7.964 5 8 .058 8 .058m1.052 9.165h3.056l-2.471 1.806l.943 2.924l-2.471-1.808l-2.473 1.808l.943-2.924l-2.471-1.806h3.056l.943-3.27z"></svg:path><svg:path d="M9.024.016v3.979h4.947z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentStarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
