import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpDesktopWindowsIcon],svg[ic-sharp-desktop-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2H1v16h9v2H8v2h8v-2h-2v-2h9zm-2 14H3V4h18z"></svg:path>`,
})
export class IcSharpDesktopWindowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
