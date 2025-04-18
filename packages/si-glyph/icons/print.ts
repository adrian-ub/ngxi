import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphPrintIcon],svg[si-glyph-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M6 12v3.98h5.993V12zM5 1h7.948v2.96H5z"></svg:path><svg:path d="M1.041 5.016v9h3.91V11.01H13v3.006h4.041v-9zm2.975 2.013H2.969V5.953h1.047zm2-.06H4.969v-1h1.047z"></svg:path></svg:g>`,
})
export class SiGlyphPrintIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
