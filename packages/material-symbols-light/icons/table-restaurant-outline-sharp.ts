import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTableRestaurantOutlineSharpIcon],svg[material-symbols-light-table-restaurant-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.075 9.192h15.85l-.985-3.384H5.085zm12.937 1H6.994l-.352 2.731h10.735zM4.827 19.02l1.187-8.827H2.77l1.56-5.385h15.36l1.576 5.384h-3.275l1.181 8.827h-.98l-.695-5.096H6.502l-.694 5.096z"></svg:path>`,
})
export class MaterialSymbolsLightTableRestaurantOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
