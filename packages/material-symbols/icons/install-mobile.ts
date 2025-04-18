import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInstallMobileIcon],svg[material-symbols-install-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h7v5H7v12h10v-2h2v5q0 .825-.587 1.413T17 23zm11-9l-5-5l1.4-1.4l2.6 2.6V3h2v7.2l2.6-2.6L23 9z"></svg:path>`,
})
export class MaterialSymbolsInstallMobileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
