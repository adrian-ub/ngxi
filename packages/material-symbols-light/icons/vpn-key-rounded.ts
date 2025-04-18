import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVpnKeyRoundedIcon],svg[material-symbols-light-vpn-key-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17q-2.083 0-3.542-1.457T2 12.005T3.458 8.46Q4.917 7 7 7q1.833 0 3.134 1.09q1.3 1.089 1.708 2.68h8.927q.508 0 .87.36T22 12q0 .535-.365.883q-.366.348-.866.348h-1.115v2.154q0 .507-.362.869q-.361.361-.869.361t-.87-.361q-.36-.362-.36-.87v-2.153h-5.35q-.409 1.59-1.71 2.68Q8.834 17 7 17m0-3.77q.508 0 .87-.36t.36-.87t-.36-.87t-.87-.36t-.87.36t-.36.87t.36.87t.87.36"></svg:path>`,
})
export class MaterialSymbolsLightVpnKeyRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
