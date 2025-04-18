import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentErrorIcon],svg[si-glyph-document-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M11.016 3.984h4.981L11.016.016zm-4.809 7.102L4.5 12.793l-1.707-1.707l-.707.707L3.793 13.5l-1.707 1.707l.707.707L4.5 14.207l1.707 1.707l.707-.707L5.207 13.5l1.707-1.707z"></svg:path><svg:path d="M9.969 5.016V.011H4.034v10.4l.466.466l1.908-1.906l2.623 2.623L7.125 13.5l2.47 2.469h6.382V5.016z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentErrorIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
