import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPackageOutlineSharpIcon],svg[material-symbols-package-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 9.75l2-1l2 1V5h-4zM7 17v-2h5v2zm-4 4V3h18v18zM5 5v14zm0 14h14V5h-3v8l-4-2l-4 2V5H5z"></svg:path>`,
})
export class MaterialSymbolsPackageOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
