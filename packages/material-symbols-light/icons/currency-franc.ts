import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCurrencyFrancIcon],svg[material-symbols-light-currency-franc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.692 20v-3h-2v-1h2V4h9.616v1H8.692v6.308h7.616v1H8.692V16H12.5v1H8.692v3z"></svg:path>`,
})
export class MaterialSymbolsLightCurrencyFrancIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
