import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsJamboardKioskOutlineSharpIcon],svg[material-symbols-jamboard-kiosk-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21v-2h5v-3H2V3h20v13h-9v3h5v2zm-2-7h16V5H4zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsJamboardKioskOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
