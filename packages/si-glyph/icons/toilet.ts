import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphToiletIcon],svg[si-glyph-toilet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.777 15.974h-6.29s3.013-5.98-1.474-5.98V8.001h11.966s.087 1.217-2.112 2.686c-3.387 2.26-2.09 5.287-2.09 5.287M8 6h7.979v.979H8zM3.012.009v6.974H7V.009zM6 3.036H5V1h1z"></svg:path>`,
})
export class SiGlyphToiletIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
