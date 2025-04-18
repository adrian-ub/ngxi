import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCurrencyYenIcon],svg[material-symbols-light-currency-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 20v-3.692h-5v-1h5V12.5h-5v-1h4.479L6.212 4h1.202L12 11.242L16.587 4h1.202l-4.768 7.5H17.5v1h-5v2.808h5v1h-5V20z"></svg:path>`,
})
export class MaterialSymbolsLightCurrencyYenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
