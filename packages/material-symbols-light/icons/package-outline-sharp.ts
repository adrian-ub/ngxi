import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPackageOutlineSharpIcon],svg[material-symbols-light-package-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 10.327l2-1l2 1V5h-4zM7 16.5v-1h5v1zM4 20V4h16v16zM5 5v14zm0 14h14V5h-4v6.962l-3-1.5l-3 1.5V5H5z"></svg:path>`,
})
export class MaterialSymbolsLightPackageOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
