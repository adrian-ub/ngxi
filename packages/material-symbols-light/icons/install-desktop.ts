import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightInstallDesktopIcon],svg[material-symbols-light-install-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 20v-2H4.616q-.691 0-1.153-.462T3 16.384V5.616q0-.691.463-1.153T4.615 4h7.308v1H4.616q-.231 0-.424.192T4 5.616v10.769q0 .23.192.423t.423.192h14.77q.23 0 .423-.192t.192-.423V14.5h1v1.885q0 .69-.462 1.152T19.385 18H15v2zm7.846-6.75L12.54 8.942l.688-.688l3.12 3.113V4h1v7.367l3.119-3.113l.688.688z"></svg:path>`,
})
export class MaterialSymbolsLightInstallDesktopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
