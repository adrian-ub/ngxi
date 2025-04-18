import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphScrewIcon],svg[si-glyph-screw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m9.984 6.943l-2.926-.671V5.014h2.926zm0 2.997l-2.926-.67V8.011l2.926.671zm0 3.029l-2.926-.671v-1.259l2.926.672zm-1.18 3.029h-.566l-1.18-1.93l2.926.671zM9 .099v1.933H7.938V.095c-1.656.21-2.926 1.337-2.926 2.706c0 1.521 6.957 1.521 6.957 0C11.969 1.438 10.647.315 9 .099"></svg:path>`,
})
export class SiGlyphScrewIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
