import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPackageSharpIcon],svg[material-symbols-light-package-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 16.5h5v-1H7zM4 20V4h16v16zM9 5v6.962l3-1.5l3 1.5V5z"></svg:path>`,
})
export class MaterialSymbolsLightPackageSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
