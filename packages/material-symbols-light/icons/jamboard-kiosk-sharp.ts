import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightJamboardKioskSharpIcon],svg[material-symbols-light-jamboard-kiosk-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 20v-1h4.5v-3H3V4h18v12h-8.5v3H17v1z"></svg:path>`,
})
export class MaterialSymbolsLightJamboardKioskSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
