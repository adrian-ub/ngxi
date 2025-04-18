import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphSignPIcon],svg[si-glyph-sign-p-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M11.854 8H6.116C4.95 8 5.001 7 5.001 6.903V1c0-1 .083-1 1.115-1h5.738c1.166 0 1.115 0 1.115 1v5.903C12.969 8.06 13 8 11.854 8M6 1v6.031h6V1z"></svg:path><svg:path d="M8 8h1.917v6.281H8zm1.969-5v-.969H8V6h1V4.984h.969v-.968H9V3zM10 3h.938v.969H10z"></svg:path><svg:path d="M14 15.959H4c0-1.071 2.238-1.938 5-1.938s5 .867 5 1.938"></svg:path></svg:g>`,
})
export class SiGlyphSignPIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
