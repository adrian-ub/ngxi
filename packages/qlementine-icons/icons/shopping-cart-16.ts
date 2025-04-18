import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsShoppingCart16Icon],svg[qlementine-icons-shopping-cart-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0zm3 0a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 4H3.3l-.264-1.58a.496.496 0 0 0-.493-.418h-1a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5h.576l1.43 8.58a.496.496 0 0 0 .493.418h8.5a.5.5 0 0 0 0-1h-8.08l-.167-1h8.74a1 1 0 0 0 .992-.876l.491-3.93a1 1 0 0 0-.978-1.195zM3.4 5l.664 4h8.92l.5-4h-10.1z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3.62 12.9a1.25 1.25 0 1 1 1.768 1.769A1.25 1.25 0 0 1 3.62 12.9m7.98 0a1.25 1.25 0 1 1 1.768 1.769A1.25 1.25 0 0 1 11.6 12.9"></svg:path>`,
})
export class QlementineIconsShoppingCart16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
