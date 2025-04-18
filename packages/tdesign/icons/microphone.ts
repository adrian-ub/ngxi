import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMicrophoneIcon],svg[tdesign-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v6q0 .615-.12 1.199A6 6 0 0 1 13 19v1h5v2H6v-2h5v-1a6 6 0 0 1-6-6zm2 4.5V13h3v2H7.535A4 4 0 0 0 11 17h2a4 4 0 0 0 3.465-2H14v-2h3v-1.5h-3v-2h3V8h-3V6h2.874A4 4 0 0 0 13 3h-2a4 4 0 0 0-3.874 3H10v2H7v1.5h3v2z"></svg:path>`,
})
export class TdesignMicrophoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
