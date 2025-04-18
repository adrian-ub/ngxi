import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDesktopWindowsOutlineSharpIcon],svg[material-symbols-light-desktop-windows-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 20v-1h2v-2H3V4h18v13h-8v2h2v1zm-5-4h16V5H4zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsLightDesktopWindowsOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
