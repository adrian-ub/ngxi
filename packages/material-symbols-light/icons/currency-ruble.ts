import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCurrencyRubleIcon],svg[material-symbols-light-currency-ruble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 20v-2.808h-2v-1h2v-2.73h-2v-1h2V4h6.27q1.978 0 3.354 1.375T18.5 8.727t-1.376 3.356t-3.355 1.379H8.5v2.73h4v1h-4V20zm1-7.539h5.27q1.545 0 2.638-1.092T17.5 8.73t-1.092-2.638Q15.314 5 13.769 5H8.5z"></svg:path>`,
})
export class MaterialSymbolsLightCurrencyRubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
