import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerShoppingCartOffIcon],svg[tabler-shopping-cart-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m13-2a2 2 0 1 0 2 2"></svg:path><svg:path d="M17 17H6V6m3.239-.769L20 6l-1 7h-2m-4 0H6M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerShoppingCartOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
