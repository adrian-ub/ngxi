import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasket03Icon],svg[hugeicons-shopping-basket-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.5 8h8.696c.625 0 .937 0 1.166.1c1.012.447.56 1.57.39 2.378a.48.48 0 0 1-.27.335a1.93 1.93 0 0 0-1.09 1.4l-.593 3.375c-.26 1.485-.35 3.606-1.65 4.652c-.955.76-2.33.76-5.081.76h-2.136c-2.75 0-4.126 0-5.08-.76c-1.301-1.046-1.39-3.167-1.651-4.652l-.593-3.375a1.93 1.93 0 0 0-1.09-1.4a.48.48 0 0 1-.27-.335c-.17-.807-.622-1.931.39-2.377C2.867 8 3.18 8 3.804 8H7.5m6.5 4h-4m-3.5-1L10 3m5 0l2.5 5" color="currentColor"></svg:path>`,
})
export class HugeiconsShoppingBasket03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
