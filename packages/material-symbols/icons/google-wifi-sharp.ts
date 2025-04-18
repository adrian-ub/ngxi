import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGoogleWifiSharpIcon],svg[material-symbols-google-wifi-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.6 10L3 4h18l.4 6zM5 20l-.325-1H2l.475-7h19.05L22 19h-2.675L19 20z"></svg:path>`,
})
export class MaterialSymbolsGoogleWifiSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
