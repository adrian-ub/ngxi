import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSignalCellularConnectedNoInternet0BarOutlineSharpIcon],svg[material-symbols-signal-cellular-connected-no-internet-0-bar-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20v2H2L22 2v6h-2V6.825L6.825 20H18Zm2-2v-8h2v8h-2Zm0 4v-2h2v2h-2Z"></svg:path>`,
})
export class MaterialSymbolsSignalCellularConnectedNoInternet0BarOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
