import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCurrencyWonIcon],svg[carbon-currency-won-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 14v-2h-4.955L24 5h-2l-2 18l-3-15h-2l-3 15l-2-18H8l.955 7H4v2h5.227l.409 3H4v2h5.909L11 27h2l3-15l3 15h2l1.091-8H28v-2h-5.636l.409-3z"></svg:path>`,
})
export class CarbonCurrencyWonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
