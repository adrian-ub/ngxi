import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSignalCellularConnectedNoInternet0BarSharpIcon],svg[material-symbols-light-signal-cellular-connected-no-internet-0-bar-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21L21 3v4.23h-1V5.422L5.421 20H17.5v1zm17-3.23V9.615h1v8.153zm1.23 2v1.46h-1.46v-1.46z"></svg:path>`,
})
export class MaterialSymbolsLightSignalCellularConnectedNoInternet0BarSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
