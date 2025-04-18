import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightScannerOutlineSharpIcon],svg[material-symbols-light-scanner-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.985 13L4.846 8.246l.316-.938L20 12.708V19H4v-6zM19 18v-4H5v4zm-8.846-1.5H17.5v-1h-7.346zM5 18v-4zm1.23-1.23h1.54v-1.54H6.23z"></svg:path>`,
})
export class MaterialSymbolsLightScannerOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
