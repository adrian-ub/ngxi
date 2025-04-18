import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightInstallMobileOutlineSharpIcon],svg[material-symbols-light-install-mobile-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22V2h8.077v1H7v1.5h7.077v1H7v13h10v-2h1V22zm1-2.5V21h10v-1.5zm11-6.212l-4.308-4.307l.708-.708l3.1 3.1V3.5h1v7.873l3.1-3.1l.708.708zM7 4.5V3zm0 15V21z"></svg:path>`,
})
export class MaterialSymbolsLightInstallMobileOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
