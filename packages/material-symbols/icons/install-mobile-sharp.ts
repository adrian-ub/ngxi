import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInstallMobileSharpIcon],svg[material-symbols-install-mobile-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 23V1h9v5H7v12h10v-2h2v7zm13-9l-5-5l1.4-1.4l2.6 2.6V3h2v7.2l2.6-2.6L23 9z"></svg:path>`,
})
export class MaterialSymbolsInstallMobileSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
