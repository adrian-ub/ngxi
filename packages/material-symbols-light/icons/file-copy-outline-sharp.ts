import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFileCopyOutlineSharpIcon],svg[material-symbols-light-file-copy-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 18V2h8.5L20 6.5V18zm8-11V3H8v14h11V7zM3 22V8h1v13h10v1zM8 3v4zv14z"></svg:path>`,
})
export class MaterialSymbolsLightFileCopyOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
