import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidCurrencyRupeeIcon],svg[heroicons-solid-currency-rupee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16M7 5a1 1 0 1 0 0 2h1a2 2 0 0 1 1.732 1H7a1 1 0 1 0 0 2h2.732A2 2 0 0 1 8 11H7a1 1 0 0 0-.707 1.707l3 3a1 1 0 0 0 1.414-1.414l-1.483-1.484A4.01 4.01 0 0 0 11.874 10H13a1 1 0 1 0 0-2h-1.126a4 4 0 0 0-.41-1H13a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsSolidCurrencyRupeeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
