import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpInstallDesktopIcon],svg[ic-sharp-install-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 17H4V5h8V3H2v16h6v2h8v-2h6v-5h-2z"></svg:path><svg:path fill="currentColor" d="m17 14l5-5l-1.41-1.41L18 10.17V3h-2v7.17l-2.59-2.58L12 9z"></svg:path>`,
})
export class IcSharpInstallDesktopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
