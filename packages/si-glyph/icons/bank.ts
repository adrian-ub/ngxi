import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphBankIcon],svg[si-glyph-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 14v-1h-1.002v-1H14V6.032h-.969V12H11V6.032h-1V12H8V6.032H7V12H5V6.032h-.99L4 12H3v1H2v1H1v1h16v-1zM3.021 6h11.958V5h1V4h-1.01L9.031.094L3.031 4H2v1h1.021z"></svg:path>`,
})
export class SiGlyphBankIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
