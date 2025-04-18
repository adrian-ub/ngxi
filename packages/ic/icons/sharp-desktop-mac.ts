import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpDesktopMacIcon],svg[ic-sharp-desktop-mac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2H1v16h9l-2 3v1h8v-1l-2-3h9zm-2 12H3V4h18z"></svg:path>`,
})
export class IcSharpDesktopMacIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
