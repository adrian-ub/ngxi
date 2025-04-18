import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSignalCellularConnectedNoInternet4BarSharpIcon],svg[material-symbols-signal-cellular-connected-no-internet-4-bar-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22L22 2v6h-4v14zm18-4v-8h2v8zm0 4v-2h2v2z"></svg:path>`,
})
export class MaterialSymbolsSignalCellularConnectedNoInternet4BarSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
