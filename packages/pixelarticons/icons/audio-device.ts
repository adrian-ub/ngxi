import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsAudioDeviceIcon],svg[pixelarticons-audio-device-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h4v2H4v8h4v2H2V4zm6 0h10v2h-8v12h8v2H10zm12 0h-2v16h2zm-7 4h2v2h-2zm3 4h-4v4h4zM8 18H4v2h4z"></svg:path>`,
})
export class PixelarticonsAudioDeviceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
