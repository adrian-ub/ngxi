import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsProductHuntFillIcon],svg[akar-icons-product-hunt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#akarIconsProductHuntFill0)"><svg:path fill="currentColor" d="M15.402 10.2c0 .992-.808 1.8-1.8 1.8H10.2V8.4h3.402c.992 0 1.8.808 1.8 1.8M24 12c0 6.629-5.371 12-12 12S0 18.629 0 12S5.371 0 12 0s12 5.371 12 12m-6.198-1.8c0-2.318-1.883-4.2-4.2-4.2H7.8v12h2.4v-3.6h3.402c2.317 0 4.2-1.882 4.2-4.2"></svg:path></svg:g><svg:defs><svg:clippath id="akarIconsProductHuntFill0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class AkarIconsProductHuntFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
