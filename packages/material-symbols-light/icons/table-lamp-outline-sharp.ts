import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTableLampOutlineSharpIcon],svg[material-symbols-light-table-lamp-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 20.5v-1h7v1zM5.929 9.23h3.763V5H7.775zM16 17.73V6.578h-5.308v3.654H4.398L7.128 4h3.564v1.577H17v12.154zM5.929 9.23h3.763z"></svg:path>`,
})
export class MaterialSymbolsLightTableLampOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
