import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightOnHubDeviceSharpIcon],svg[material-symbols-light-on-hub-device-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.923 19.77v-1h6.154v1zm0-2.77L7.902 4h8.196l-1.021 13z"></svg:path>`,
})
export class MaterialSymbolsLightOnHubDeviceSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
