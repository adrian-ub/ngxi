import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightInstallMobileIcon],svg[material-symbols-light-install-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.616 22q-.691 0-1.153-.462T6 20.385V3.615q0-.69.463-1.152T7.616 2h6.461v3.5H7v13h10v-2h1v3.885q0 .69-.462 1.152T16.384 22zM18 13.289L13.692 8.98l.708-.708l3.1 3.1V3.5h1v7.873l3.1-3.1l.708.708z"></svg:path>`,
})
export class MaterialSymbolsLightInstallMobileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
