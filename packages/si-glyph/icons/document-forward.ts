import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentForwardIcon],svg[si-glyph-document-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M2.017.058v15.896h12.006V5.032H7.952V.058zM8.922 9v-.953l.039-.039a.53.53 0 0 1 .386-.146c.174 0 .341.063.447.172l2.097 1.613a.55.55 0 0 1 0 .756l-2.108 1.603a.64.64 0 0 1-.393.118a.6.6 0 0 1-.429-.155l-.039-.038v-.905c-1.315.025-2.843.842-3.361 1.805c-.029.051-.173.306-.377.306q-.288-.002-.288-.554c0-2.001 2.153-3.557 4.026-3.583"></svg:path><svg:path d="M9.004.016v3.978h4.946z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentForwardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
