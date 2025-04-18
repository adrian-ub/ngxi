import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDesktopMacSharpIcon],svg[material-symbols-light-desktop-mac-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.27 20v-.77l1.884-1.884H3V4h18v13.346h-8.154l1.885 1.885V20z"></svg:path>`,
})
export class MaterialSymbolsLightDesktopMacSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
