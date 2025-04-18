import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phShoppingCartSimpleThinIcon],svg[ph-shopping-cart-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.18 69.58A4 4 0 0 0 232 68H54.15l-10.3-37.07A4 4 0 0 0 40 28H16a4 4 0 0 0 0 8h21l35.89 129.35A20.06 20.06 0 0 0 92.16 180H191a20.06 20.06 0 0 0 19.27-14.65l25.63-92.28a4 4 0 0 0-.72-3.49m-32.67 93.63A12 12 0 0 1 191 172H92.16a12 12 0 0 1-11.56-8.79L56.37 76h170.37ZM100 216a12 12 0 1 1-12-12a12 12 0 0 1 12 12m104 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhShoppingCartSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
