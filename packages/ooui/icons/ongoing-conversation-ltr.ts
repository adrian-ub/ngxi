import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiOngoingConversationLtrIcon],svg[ooui-ongoing-conversation-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3 9.06a1.39 1.39 0 1 1 1.37-1.39A1.39 1.39 0 0 1 5 9.06m5.16 0a1.39 1.39 0 1 1 1.39-1.39a1.39 1.39 0 0 1-1.42 1.39zm5.16 0a1.39 1.39 0 1 1 1.39-1.39a1.39 1.39 0 0 1-1.42 1.39z"></svg:path>`,
})
export class OouiOngoingConversationLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
