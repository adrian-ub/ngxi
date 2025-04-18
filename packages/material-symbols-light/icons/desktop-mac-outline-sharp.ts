import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDesktopMacOutlineSharpIcon],svg[material-symbols-light-desktop-mac-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.27 20v-.77l1.884-1.884H3V4h18v13.346h-8.154l1.885 1.885V20zM4 14.846h16V5H4zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsLightDesktopMacOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
