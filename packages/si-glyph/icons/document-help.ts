import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentHelpIcon],svg[si-glyph-document-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.969.062H3.031v15.92h10.938V4.062h-5zm.047 12.972H7.954v-1.081h1.062zm1-7.05v1.004l1.001-.004v2.031h-1.001v.996h-1v1.011H7.969V8.968h2.016V7H7.016v1.031H5.969V6.969h1v-.984h3.047z"></svg:path><svg:path d="M10.04.076v2.912H14z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentHelpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
