import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiOngoingConversationRtlIcon],svg[ooui-ongoing-conversation-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 14c0 1.1.9 2 2 2h14l4 4V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2zm13.6-6.3c0-.8.6-1.4 1.4-1.4s1.4.6 1.4 1.4s-.6 1.4-1.4 1.4c-.8-.1-1.4-.7-1.4-1.4M9.9 9.1s-.1 0 0 0c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4s1.4.6 1.4 1.4s-.7 1.4-1.4 1.4m-5.2 0c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4s1.4.6 1.4 1.4c0 .7-.7 1.4-1.4 1.4"></svg:path>`,
})
export class OouiOngoingConversationRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
