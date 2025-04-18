import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneInstallDesktopIcon],svg[ic-twotone-install-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.83 9L16 10.17zM4 17h16v-3.17l-3 3L9.17 9L13 5.17V5H4z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M20 17H4V5h9V3H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2v-5.17l-2 2z"></svg:path><svg:path fill="currentColor" d="M18 10.17V3h-2v7.17l-2.59-2.58L12 9l5 5l5-5l-1.41-1.41z"></svg:path>`,
})
export class IcTwotoneInstallDesktopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
