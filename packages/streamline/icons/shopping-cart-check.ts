import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCartCheckIcon],svg[streamline-shopping-cart-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.946 13.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m-6.5 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1M.5.5H3L3.263 3m0 0l.643 6.105A1 1 0 0 0 4.9 10h6.32a1 1 0 0 0 .97-.757l1.25-5A1 1 0 0 0 12.47 3z"></svg:path><svg:path d="m6.42 6.75l1.333 1l2.188-2.5"></svg:path></svg:g>`,
})
export class StreamlineShoppingCartCheckIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
