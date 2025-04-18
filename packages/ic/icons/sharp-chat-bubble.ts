import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpChatBubbleIcon],svg[ic-sharp-chat-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20l4-4h16z"></svg:path>`,
})
export class IcSharpChatBubbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
