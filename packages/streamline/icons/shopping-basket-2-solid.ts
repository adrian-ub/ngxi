import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingBasket2SolidIcon],svg[streamline-shopping-basket-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.777 1.587a.75.75 0 0 1 1.024.28L11.877 5.5h.398a1.5 1.5 0 0 1 1.495 1.799l-1.1 5.499v.002a1.5 1.5 0 0 1-1.495 1.2h-8.35a1.5 1.5 0 0 1-1.495-1.2v-.002L.23 7.3v-.001a1.5 1.5 0 0 1 1.495-1.8h.398l2.076-3.633a.75.75 0 0 1 1.303.744L3.85 5.5h6.298L8.5 2.61a.75.75 0 0 1 .278-1.023Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShoppingBasket2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
