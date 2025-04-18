import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsUsbKeyIcon],svg[game-icons-usb-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m394.8 30.88l-65 65.03l86.3 86.29l65.1-65zm-6.3 36.04l17 17l-12.8 12.72l-17-17zm-82.8 30.4l-11.3 11.28l109 108.9l11.3-11.2zM263.3 103L23.4 342.9v60.5l85.2 85.2h60.5l240-239.9zm164.9 3.6l16.9 17l-12.8 12.6l-16.9-17z"></svg:path>`,
})
export class GameIconsUsbKeyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
