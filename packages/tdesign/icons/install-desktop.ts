import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignInstallDesktopIcon],svg[tdesign-install-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2v4.657l1.53-1.466l1.384 1.445L19 10.385l-3.914-3.75l1.384-1.444L18 6.657V2zM1 3h13v2H3v11h18v-4h2v6H1zm4 17h14v2H5z"></svg:path>`,
})
export class TdesignInstallDesktopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
