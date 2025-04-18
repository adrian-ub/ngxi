import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGeneralDeviceSharpIcon],svg[material-symbols-light-general-device-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.77 17V4h6.46v13zm0 2.385v-1h6.46v1z"></svg:path>`,
})
export class MaterialSymbolsLightGeneralDeviceSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
