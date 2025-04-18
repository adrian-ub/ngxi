import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPanToolAltOutlineSharpIcon],svg[material-symbols-pan-tool-alt-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.525 21L1.15 11.925l1.775-1.7L7 13.075V2h2v14.925l-2.775-1.95L9.475 19H19V9h2v12zM11 13V6h2v7zm4 0V7h2v6zm-1 2"></svg:path>`,
})
export class MaterialSymbolsPanToolAltOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
