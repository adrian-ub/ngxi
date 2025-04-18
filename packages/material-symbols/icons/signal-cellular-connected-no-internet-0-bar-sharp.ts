import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSignalCellularConnectedNoInternet0BarSharpIcon],svg[material-symbols-signal-cellular-connected-no-internet-0-bar-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22L22 2v6h-2V6.825L6.825 20H18v2zm18-4v-8h2v8zm2 2v2h-2v-2z"></svg:path>`,
})
export class MaterialSymbolsSignalCellularConnectedNoInternet0BarSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
