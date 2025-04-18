import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCart1Icon],svg[streamline-shopping-cart-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.508.5H2.95l.87 8.65a1 1 0 0 0 1 .85h6.3a1 1 0 0 0 1-.68l1.33-4a1 1 0 0 0-.14-.9a1 1 0 0 0-.86-.42H3.3m7.65 9.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m-6.5 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path>`,
})
export class StreamlineShoppingCart1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
