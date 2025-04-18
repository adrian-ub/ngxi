import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCart1SolidIcon],svg[streamline-shopping-cart-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.844.753a.75.75 0 0 0-.747-.675H.77a.75.75 0 0 0 0 1.5h1.649l.252 2.506l.002.052l.482 4.795a1.43 1.43 0 0 0 1.431 1.241h5.852a1.43 1.43 0 0 0 1.416-.973v-.002l1.24-3.724v-.001a1.43 1.43 0 0 0-.2-1.286a1.43 1.43 0 0 0-1.216-.6h-7.55zm7.58 12.07a1.178 1.178 0 1 0-2.355 0a1.178 1.178 0 0 0 2.356 0Zm-6.323-1.179a1.178 1.178 0 1 1 0 2.356a1.178 1.178 0 0 1 0-2.356" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShoppingCart1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
