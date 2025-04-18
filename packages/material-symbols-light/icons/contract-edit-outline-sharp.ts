import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightContractEditOutlineSharpIcon],svg[material-symbols-light-contract-edit-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.385 8.385v-1h8.23v1zm0 2.769v-1h8.23v1zM11.846 20H5zm0 1H6q-.846 0-1.423-.577T4 19v-2.77h3V3h13v6.577l-1 1V4H8v12.23h5.346l-1 1H5V19q0 .425.288.713T6 20h5.846zm2.385 0v-2.21l5.96-5.934l2.19 2.204L16.44 21zm6.885-5.94l-.925-.945zm-6 5.056h.95l3.467-3.474l-.47-.475l-.455-.488l-3.492 3.486zm3.948-3.949l-.456-.488l.925.963z"></svg:path>`,
})
export class MaterialSymbolsLightContractEditOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
