import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInstallDesktopIcon],svg[material-symbols-install-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 21v-2H4q-.825 0-1.412-.587T2 17V5q0-.825.588-1.412T4 3h8v2H4v12h16v-3h2v3q0 .825-.587 1.413T20 19h-4v2zm9-7l-5-5l1.4-1.4l2.6 2.575V3h2v7.175L20.6 7.6L22 9z"></svg:path>`,
})
export class MaterialSymbolsInstallDesktopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
