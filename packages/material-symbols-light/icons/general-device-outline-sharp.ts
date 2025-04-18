import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGeneralDeviceOutlineSharpIcon],svg[material-symbols-light-general-device-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.77 17V4h6.46v13zm1-1h4.46V5H9.77zm-1 3.385v-1h6.46v1zm1-3.385h4.46z"></svg:path>`,
})
export class MaterialSymbolsLightGeneralDeviceOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
