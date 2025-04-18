import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightJamboardKioskOutlineSharpIcon],svg[material-symbols-light-jamboard-kiosk-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 20v-1h4.5v-3H3V4h18v12h-8.5v3H17v1zm-3-5h16V5H4zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsLightJamboardKioskOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
