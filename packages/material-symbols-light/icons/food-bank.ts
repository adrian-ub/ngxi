import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFoodBankIcon],svg[material-symbols-light-food-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.308 17.346h.846v-3.384q.529 0 .899-.37t.37-.9v-2.538h-.846v2.538h-.423v-2.538h-.846v2.538h-.423v-2.538h-.846v2.538q0 .53.37.9t.899.37zm3.384 0h.847v-7.192q-.691 0-1.192.497q-.5.497-.5 1.195v2.539h.845zM5 20V9.5l7-5.27l7 5.27V20z"></svg:path>`,
})
export class MaterialSymbolsLightFoodBankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
