import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionLogoWindowsIcon],svg[ion-logo-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 265H232v179l248 36zm-264 0H32v150l184 26.7zM480 32L232 67.4V249h248zM216 69.7L32 96v153h184z"></svg:path>`,
})
export class IonLogoWindowsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
