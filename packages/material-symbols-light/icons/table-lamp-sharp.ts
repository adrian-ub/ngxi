import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTableLampSharpIcon],svg[material-symbols-light-table-lamp-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 20.5v-1h7v1zm3-2.77V6.578h-5.308v3.654H4.398L7.128 4h3.564v1.577H17v12.154z"></svg:path>`,
})
export class MaterialSymbolsLightTableLampSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
