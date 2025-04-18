import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentArrowDownIcon],svg[si-glyph-document-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7.984 0L2.016.052l.01 10.927l2.005-.01l-.004 1.984h2.02L4.031 16h9.938V6.012H7.984z"></svg:path><svg:path d="M9 0v4.969h5zM4.017 14.059l-1.5 1.884l-1.5-1.884H2.03V12h.954v2.059z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentArrowDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
