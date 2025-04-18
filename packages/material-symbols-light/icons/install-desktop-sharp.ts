import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightInstallDesktopSharpIcon],svg[material-symbols-light-install-desktop-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 20v-2H3V4h8.923v1H4v12h16v-2.5h1V18h-6v2zm7.846-6.75L12.54 8.942l.688-.688l3.12 3.113V4h1v7.367l3.119-3.113l.688.688z"></svg:path>`,
})
export class MaterialSymbolsLightInstallDesktopSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
