import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsShoppingBasketSharpIcon],svg[material-symbols-shopping-basket-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.025 21L.675 9H6.75l5.225-7.775L17.2 9h6.125l-3.35 12zM12 17q.825 0 1.413-.587T14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17M9.175 9H14.8l-2.825-4.2z"></svg:path>`,
})
export class MaterialSymbolsShoppingBasketSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
