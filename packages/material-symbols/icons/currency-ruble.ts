import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCurrencyRubleIcon],svg[material-symbols-currency-ruble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21v-3H5v-2h2v-2H5v-2h2V3h6.5q2.3 0 3.9 1.6T19 8.5t-1.6 3.9t-3.9 1.6H9v2h4v2H9v3zm2-9h4.5q1.45 0 2.475-1.025T17 8.5t-1.025-2.475T13.5 5H9z"></svg:path>`,
})
export class MaterialSymbolsCurrencyRubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
