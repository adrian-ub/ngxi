import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityShoppingCartSolidBadgedIcon],svg[clarity-shopping-cart-solid-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="13.5" cy="29.5" r="2.5" fill="currentColor" class="clr-i-solid--badged clr-i-solid-path-1--badged"></svg:circle><svg:circle cx="26.5" cy="29.5" r="2.5" fill="currentColor" class="clr-i-solid--badged clr-i-solid-path-2--badged"></svg:circle><svg:path fill="currentColor" d="M30 13.5A7.5 7.5 0 0 1 22.5 6H9.21l-.45-1.43a1 1 0 0 0-.66-.65L4 2.66a1 1 0 1 0-.59 1.92L7 5.68l4.58 14.47l-1.63 1.34l-.13.13A2.66 2.66 0 0 0 9.74 25A2.75 2.75 0 0 0 12 26h16.69a1 1 0 0 0 0-2H11.84a.67.67 0 0 1-.56-1l2.41-2h15.43a1 1 0 0 0 1-.76l1.71-7a7.5 7.5 0 0 1-1.83.26" class="clr-i-solid--badged clr-i-solid-path-3--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-solid--badged clr-i-solid-path-4--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityShoppingCartSolidBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
