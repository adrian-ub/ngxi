import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDevicesFoldSharpIcon],svg[material-symbols-light-devices-fold-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.385 20V3.821l5.884-2.627V4H21v16zm1.752-1H20V5h-3.73v12.16zM3 5.23V4h1.23v1.23zM3 20v-1.23h1.23V20zm0-3.692v-1.231h1.23v1.23zm0-3.693v-1.23h1.23v1.23zm0-3.692v-1.23h1.23v1.23zm3.692-3.692V4h1.231v1.23zm0 14.769v-1.23h1.231V20z"></svg:path>`,
})
export class MaterialSymbolsLightDevicesFoldSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
