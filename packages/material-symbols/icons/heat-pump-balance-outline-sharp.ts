import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHeatPumpBalanceOutlineSharpIcon],svg[material-symbols-heat-pump-balance-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6.6h2v10h2v-10h6v10h2v-11h4.175L19 4.425L20.4 3L24 6.6l-3.6 3.575L19 8.75l1.175-1.15H18v11h-6v-10h-2v10H4zm-3 15v-10h22v10zm2-2h18v-6H3zm18-6H3z"></svg:path>`,
})
export class MaterialSymbolsHeatPumpBalanceOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
