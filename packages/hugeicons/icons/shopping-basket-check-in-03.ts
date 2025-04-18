import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasketCheckIn03Icon],svg[hugeicons-shopping-basket-check-in-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.5 8h8.696c.625 0 .937 0 1.166.1c1.012.447.56 1.57.39 2.378a.48.48 0 0 1-.27.335a2 2 0 0 0-.802.687M7.5 8H3.804c-.625 0-.937 0-1.166.1c-1.012.447-.56 1.57-.39 2.378a.49.49 0 0 0 .27.335a1.93 1.93 0 0 1 1.09 1.4l.593 3.375c.26 1.485.35 3.606 1.65 4.652c.955.76 2.33.76 5.081.76H13.5m2.5-4.5c.491-.506 1.8-2.5 2.5-2.5m2.5 2.5c-.491-.506-1.8-2.5-2.5-2.5m0 0v7m-12-10L10 3m5 0l2.5 5" color="currentColor"></svg:path>`,
})
export class HugeiconsShoppingBasketCheckIn03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
