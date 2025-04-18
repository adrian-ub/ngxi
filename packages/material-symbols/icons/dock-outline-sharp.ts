import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDockOutlineSharpIcon],svg[material-symbols-dock-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 23v-2h8v2zm-2-4V1h12v18zm2-3v1h8v-1zm0-2h8V6H8zM8 4h8V3H8zm0 0V3zm0 12v1z"></svg:path>`,
})
export class MaterialSymbolsDockOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
