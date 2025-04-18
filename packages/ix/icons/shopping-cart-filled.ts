import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixShoppingCartFilledIcon],svg[ix-shopping-cart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M170.667 149.333L149.333 42.667H42.667v42.666h72.32l55.68 277.334h256l42.666-213.334z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M256 437.333c0 17.673-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32s32 14.327 32 32m149.333 0c0 17.673-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32s32 14.327 32 32"></svg:path>`,
})
export class IxShoppingCartFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
