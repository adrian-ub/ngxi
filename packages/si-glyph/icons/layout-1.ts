import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphLayout1Icon],svg[si-glyph-layout-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M17 16H1V0h16zM2 15h14V1H2z"></svg:path><svg:path d="M3 2h6v12H3zm7 0h5v6h-5zm0 7h5v5h-5z"></svg:path></svg:g>`,
})
export class SiGlyphLayout1Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
