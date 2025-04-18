import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMagnifyDockedOutlineSharpIcon],svg[material-symbols-light-magnify-docked-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h18v14zm1-2.384V18h16v-1.384zm0-1h16V6H4zM14.5 13.5h1v-2.192h2.192v-1H15.5V8.116h-1v2.192h-2.192v1H14.5zM4 16.616V18z"></svg:path>`,
})
export class MaterialSymbolsLightMagnifyDockedOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
