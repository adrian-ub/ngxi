import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggShoppingCartIcon],svg[gg-shopping-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.792 2H1v2h3.218l2.77 12.678H7V17h13v-.248l2.193-9.661L22.531 6H6.655l-.57-2.611zm14.195 6H7.092l1.529 7h9.777z" clip-rule="evenodd"></svg:path><svg:path d="M10 22a2 2 0 1 0 0-4a2 2 0 0 0 0 4m9-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g>`,
})
export class GgShoppingCartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
