import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundVoiceChatIcon],svg[ic-round-voice-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-3.62 10.7L14 10.8V13c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v2.2l2.38-1.9a.998.998 0 0 1 1.62.78v3.84c0 .84-.97 1.3-1.62.78"></svg:path>`,
})
export class IcRoundVoiceChatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
