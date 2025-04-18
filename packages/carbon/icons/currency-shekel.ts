import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCurrencyShekelIcon],svg[carbon-currency-shekel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 27H7V5h8a5.006 5.006 0 0 1 5 5v12h-2V10a3.003 3.003 0 0 0-3-3H9Z"></svg:path><svg:path fill="currentColor" d="M20 27h-8V10h2v15h6a3.003 3.003 0 0 0 3-3V5h2v17a5.006 5.006 0 0 1-5 5"></svg:path>`,
})
export class CarbonCurrencyShekelIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
