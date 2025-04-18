import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phShoppingCartSimpleBoldIcon],svg[ph-shopping-cart-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M241.55 64.74A12 12 0 0 0 232 60H60.23l-8.67-31.21A12 12 0 0 0 40 20H20a12 12 0 0 0 0 24h10.88l34.3 123.49a28.09 28.09 0 0 0 27 20.51H191a28.09 28.09 0 0 0 27-20.51l25.63-92.28a12 12 0 0 0-2.08-10.47m-46.75 96.33A4 4 0 0 1 191 164H92.16a4 4 0 0 1-3.85-2.93L66.9 84h149.31ZM108 220a20 20 0 1 1-20-20a20 20 0 0 1 20 20m104 0a20 20 0 1 1-20-20a20 20 0 0 1 20 20"></svg:path>`,
})
export class PhShoppingCartSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
