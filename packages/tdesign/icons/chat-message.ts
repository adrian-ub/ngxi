import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChatMessageIcon],svg[tdesign-chat-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 22.704V2h21v16H6.876zm2-4.408L6.124 16H20.5V4h-17zM13.004 11H11V8.996h2.004zm-5 0H6V8.996h2.004zm10 0H16V8.996h2.004z"></svg:path>`,
})
export class TdesignChatMessageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
