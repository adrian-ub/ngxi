import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphSquareStarIcon],svg[si-glyph-square-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.628.021H2.352a1.33 1.33 0 0 0-1.33 1.331v13.275c0 .734.596 1.331 1.33 1.331h13.276c.734 0 1.33-.597 1.33-1.331V1.352a1.33 1.33 0 0 0-1.33-1.331m-3.23 13.484l-3.385-1.883l-3.385 1.883l.646-3.987l-2.737-2.824l3.783-.58l1.693-3.628l1.692 3.628l3.784.58l-2.738 2.824z"></svg:path>`,
})
export class SiGlyphSquareStarIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
