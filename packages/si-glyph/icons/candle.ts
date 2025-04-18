import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphCandleIcon],svg[si-glyph-candle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8 5h.926v1.823H8z"></svg:path><svg:path d="M10.287 5.973c.11-2.604-.986-3.368-1.61-3.368c-.65 1.177-2.032 1.498-2.329 3.394C5.034 3.567 8.004 3.059 8.153.027c.252-.001 4.403 3.559 2.134 5.946m1.031 1.436s-.518.644-2.244.644s-3.37-.644-3.37-.644a.677.677 0 0 0-.681.672v7.226c0 .371.305.673.681.673h5.614a.68.68 0 0 0 .682-.673V8.081a.677.677 0 0 0-.682-.672m-.258 7.607H9.951V8.954h1.109z"></svg:path></svg:g>`,
})
export class SiGlyphCandleIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
