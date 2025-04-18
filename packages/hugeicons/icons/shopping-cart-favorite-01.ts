import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingCartFavorite01Icon],svg[hugeicons-shopping-cart-favorite-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8 16h7.263c4.488 0 5.17-2.82 5.998-6.93c.239-1.187.358-1.78.071-2.175c-.168-.231-.426-.327-.832-.367M6 6.5h1.5m3.515-4.113c1.073-.64 2.009-.382 2.571.028c.23.169.346.253.414.253s.183-.084.414-.253c.562-.41 1.498-.668 2.571-.028c1.408.84 1.726 3.609-1.52 5.945c-.62.445-.928.668-1.465.668s-.846-.223-1.464-.668c-3.247-2.336-2.929-5.106-1.521-5.945M8 16L5.379 3.515A2 2 0 0 0 3.439 2H2.5m6.38 14h-.411C7.105 16 6 17.151 6 18.571a.42.42 0 0 0 .411.429H17.5"></svg:path><svg:circle cx="10.5" cy="20.5" r="1.5"></svg:circle><svg:circle cx="17.5" cy="20.5" r="1.5"></svg:circle></svg:g>`,
})
export class HugeiconsShoppingCartFavorite01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
