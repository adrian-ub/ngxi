import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHeatPumpBalanceSharpIcon],svg[material-symbols-heat-pump-balance-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6.6v12h6v-10h2v10h6v-11h2.175L19 8.75l1.4 1.425L24 6.6L20.4 3L19 4.425L20.175 5.6H16v11h-2v-10H8v10H6v-10zm-3 15v-10h22v10z"></svg:path>`,
})
export class MaterialSymbolsHeatPumpBalanceSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
