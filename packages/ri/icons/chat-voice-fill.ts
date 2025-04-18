import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riChatVoiceFillIcon],svg[ri-chat-voice-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.929 19.071A9.97 9.97 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10H2zM11 6v12h2V6zM7 9v6h2V9zm8 0v6h2V9z"></svg:path>`,
})
export class RiChatVoiceFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
