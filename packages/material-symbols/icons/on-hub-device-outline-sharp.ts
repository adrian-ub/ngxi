import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsOnHubDeviceOutlineSharpIcon],svg[material-symbols-on-hub-device-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 21v-2h8v2zm0-3L6.825 3h10.35L16 18zm1.85-2h4.3L15 5H9zm0-11H9h6z"></svg:path>`,
})
export class MaterialSymbolsOnHubDeviceOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
