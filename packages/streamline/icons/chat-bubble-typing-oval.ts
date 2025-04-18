import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleTypingOvalIcon],svg[streamline-chat-bubble-typing-oval-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.002 7.25a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m-2.75.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m5.5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path><svg:path d="M6.998.56a6.44 6.44 0 0 0-5.36 10.007L.558 13.44l3.617-.654A6.44 6.44 0 1 0 6.998.56"></svg:path></svg:g>`,
})
export class StreamlineChatBubbleTypingOvalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
