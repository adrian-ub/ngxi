import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphPaperShredderIcon],svg[si-glyph-paper-shredder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M12.969 3.003H7.985V0H3v6.982h9.969z"></svg:path><svg:path d="M9.111 0v1.938h3.858zM3 13v2.986h.978V13zm2.013 0v3h.974v-3zM7 13v2.998h.998V13zm2 0v2.993h.986V13zm2 0v2.964h.963V13zM0 8.031V12h15.958V8.031zm2.969 2h-1V9h1zm1 0V9h1.062v1.031z"></svg:path></svg:g>`,
})
export class SiGlyphPaperShredderIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}
