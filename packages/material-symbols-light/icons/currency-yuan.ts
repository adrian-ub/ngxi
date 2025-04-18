import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCurrencyYuanIcon],svg[material-symbols-light-currency-yuan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 20v-6.5h-5v-1h4.802L5.904 4h1.202L12 11.742L16.894 4h1.202l-5.398 8.5H17.5v1h-5V20z"></svg:path>`,
})
export class MaterialSymbolsLightCurrencyYuanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
