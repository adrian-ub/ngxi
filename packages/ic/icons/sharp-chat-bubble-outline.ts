import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpChatBubbleOutlineIcon],svg[ic-sharp-chat-bubble-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20l4-4h16zm-2 14H6l-2 2V4h16z"></svg:path>`,
})
export class IcSharpChatBubbleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
