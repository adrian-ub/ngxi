import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGoogleWifiSharpIcon],svg[material-symbols-light-google-wifi-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.658 10.616L4.038 5h15.924l.38 5.616zM5.692 19l-.267-.846H3.173l.418-6.52H20.41l.417 6.52h-2.252l-.267.846z"></svg:path>`,
})
export class MaterialSymbolsLightGoogleWifiSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
