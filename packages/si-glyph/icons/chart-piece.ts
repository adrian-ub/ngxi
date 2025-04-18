import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphChartPieceIcon],svg[si-glyph-chart-piece-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.392 1.049c-.349-.051-.562-.033-.925-.033c-4.095 0-7.424 3.334-7.424 7.43s3.329 7.431 7.424 7.431c4.094 0 7.423-3.335 7.423-7.431c0-.346.044-.598-.002-.929l-7.399.961z"></svg:path><svg:path d="m11.375.047l-.945 6.539l6.613-.928C16.638 2.764 14.314.466 11.375.047"></svg:path></svg:g>`,
})
export class SiGlyphChartPieceIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
