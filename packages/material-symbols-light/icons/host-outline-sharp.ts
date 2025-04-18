import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHostOutlineSharpIcon],svg[material-symbols-light-host-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20V4h7.808v16zm10.192 0V4H21v16zM4 19h5.808V5H4zm10.192 0H20V5h-5.808zm-8.808-4.615h3v-1h-3zm10.232 0h3v-1h-3zM5.385 11.577h3v-1h-3zm10.23 0h3v-1h-3zM5.386 8.75h3v-1h-3zm10.23 0h3v-1h-3zM4 19h5.808zm10.192 0H20z"></svg:path>`,
})
export class MaterialSymbolsLightHostOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
