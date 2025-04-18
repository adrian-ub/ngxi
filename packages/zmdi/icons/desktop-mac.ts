import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiDesktopMacIcon],svg[zmdi-desktop-mac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 3q17 0 29.5 12.5T469 45v256q0 18-12.5 30.5T427 344H277l43 64v21H149v-21l43-64H43q-18 0-30.5-12.5T0 301V45q0-17 12.5-29.5T43 3zm0 256V45H43v214z"></svg:path>`,
})
export class ZmdiDesktopMacIcon {
  readonly viewBox = input("0 0 472 432")
  readonly width = input("1.1em")
  readonly height = input("1em")
}
