import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentCheckedIcon],svg[si-glyph-document-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.024.016v3.979h4.947z"></svg:path><svg:path d="M8 5.062V0H2.008v12.745l.436.437l2.135-2.136l2.109 2.105l-2.801 2.802H14V5z"></svg:path><svg:path d="m4.58 12.46l-2.136 2.136l-1.399-1.4l-.693.693l2.092 2.092l2.829-2.829z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentCheckedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
