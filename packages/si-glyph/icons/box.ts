import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphBoxIcon],svg[si-glyph-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 2h16v2H1zm1 10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5H2zm4.98-5.041h4.082v1.104H6.98z"></svg:path>`,
})
export class SiGlyphBoxIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
