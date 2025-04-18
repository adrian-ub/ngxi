import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidCurrencyPoundIcon],svg[heroicons-solid-currency-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m1-14a3 3 0 0 0-3 3v2H7a1 1 0 0 0 0 2h1v1a1 1 0 0 1-1 1a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9.83c.11-.313.17-.65.17-1v-1h1a1 1 0 1 0 0-2h-1V7a1 1 0 1 1 2 0a1 1 0 1 0 2 0a3 3 0 0 0-3-3" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsSolidCurrencyPoundIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
