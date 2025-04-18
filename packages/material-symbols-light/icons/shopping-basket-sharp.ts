import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightShoppingBasketSharpIcon],svg[material-symbols-light-shopping-basket-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.833 20l-2.85-10H7.75l4.264-6.429L16.239 10h5.778L19.13 20zM12 16q.402 0 .701-.299T13 15t-.299-.701T12 14t-.701.299T11 15t.299.701T12 16m-3.036-6h6.067l-3.037-4.623z"></svg:path>`,
})
export class MaterialSymbolsLightShoppingBasketSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
