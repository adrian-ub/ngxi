import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsShoppingBagOutlineSharpIcon],svg[material-symbols-shopping-bag-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22V6h4q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h4v16zm2-2h12V8h-2v3h-2V8h-4v3H8V8H6zm4-14h4q0-.825-.587-1.412T12 4t-1.412.588T10 6M6 20V8z"></svg:path>`,
})
export class MaterialSymbolsShoppingBagOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
