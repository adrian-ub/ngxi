import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDeviceVibrateIcon],svg[pixelarticons-device-vibrate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3H6v18h12V3zm8 2v14H8V5zm-3 10h-2v2h2zm7-8h2v2h-2zm2 4V9h2v2zm0 2h-2v-2h2zm0 2v-2h2v2zm0 0v2h-2v-2zM2 17h2v-2H2v-2h2v-2H2V9h2V7H2v2H0v2h2v2H0v2h2z"></svg:path>`,
})
export class PixelarticonsDeviceVibrateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
