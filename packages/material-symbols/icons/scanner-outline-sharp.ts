import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsScannerOutlineSharpIcon],svg[material-symbols-scanner-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.6 12L3.5 6.9L4.2 5L21 11.15V20H3v-8zm1.4 6v-4H5v4zm-9-1h8v-2h-8zm-5 1v-4zm1-1h2v-2H6z"></svg:path>`,
})
export class MaterialSymbolsScannerOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
