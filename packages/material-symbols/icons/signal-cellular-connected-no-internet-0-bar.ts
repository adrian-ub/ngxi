import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSignalCellularConnectedNoInternet0BarIcon],svg[material-symbols-signal-cellular-connected-no-internet-0-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22L22 2v6h-2V6.825L6.825 20H18v2zm19 0q-.425 0-.712-.288T20 21t.288-.712T21 20t.713.288T22 21t-.288.713T21 22m-1-4v-8h2v8z"></svg:path>`,
})
export class MaterialSymbolsSignalCellularConnectedNoInternet0BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
