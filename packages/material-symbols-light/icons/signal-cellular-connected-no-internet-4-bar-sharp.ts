import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSignalCellularConnectedNoInternet4BarSharpIcon],svg[material-symbols-light-signal-cellular-connected-no-internet-4-bar-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21L21 3v4.23h-3.384V21zm17-3.23V9.615h1v8.153zm-.23 3.46v-1.46h1.46v1.46z"></svg:path>`,
})
export class MaterialSymbolsLightSignalCellularConnectedNoInternet4BarSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
