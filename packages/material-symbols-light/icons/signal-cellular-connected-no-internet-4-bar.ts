import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSignalCellularConnectedNoInternet4BarIcon],svg[material-symbols-light-signal-cellular-connected-no-internet-4-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21L21 3v4.23h-3.384V21zm17.5.23q-.31 0-.52-.21q-.21-.209-.21-.52t.21-.52q.209-.21.52-.21t.52.21q.21.209.21.52t-.21.52q-.209.21-.52.21m-.5-3.46V9.615h1v8.153z"></svg:path>`,
})
export class MaterialSymbolsLightSignalCellularConnectedNoInternet4BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
