import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciShoppingCart01Icon],svg[ci-shopping-cart-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 0H9.294c-.461 0-.692 0-.882-.082a1 1 0 0 1-.418-.337c-.12-.167-.167-.39-.261-.83L5.27 4.265c-.096-.451-.145-.677-.265-.845a1 1 0 0 0-.419-.338C4.397 3 4.167 3 3.707 3H3m3 3h12.873c.722 0 1.082 0 1.325.15a1 1 0 0 1 .435.579c.077.274-.022.621-.222 1.314l-1.385 4.8c-.12.415-.18.622-.3.776a1 1 0 0 1-.409.307c-.18.074-.396.074-.825.074H7.73M8 21a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class CiShoppingCart01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
