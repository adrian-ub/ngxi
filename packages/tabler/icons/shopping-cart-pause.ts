import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerShoppingCartPauseIcon],svg[tabler-shopping-cart-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></svg:path><svg:path d="M13 17H6V3H4"></svg:path><svg:path d="m6 5l14 1l-1 7H6m11 4v5m4-5v5"></svg:path></svg:g>`,
})
export class TablerShoppingCartPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
