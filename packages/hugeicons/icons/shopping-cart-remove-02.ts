import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingCartRemove02Icon],svg[hugeicons-shopping-cart-remove-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m8 16l8.72-.727c2.729-.227 3.341-.823 3.643-3.544L21 6M6 6h2m14 0h-3.5m-8-3l3 3m0 0l3 3m-3-3l-3 3m3-3l3-3"></svg:path><svg:circle cx="6" cy="20" r="2"></svg:circle><svg:circle cx="17" cy="20" r="2"></svg:circle><svg:path d="M8 20h7M2 2h.966c.945 0 1.768.625 1.997 1.515L7.94 15.076a1.96 1.96 0 0 1-.35 1.686L6.631 18"></svg:path></svg:g>`,
})
export class HugeiconsShoppingCartRemove02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
