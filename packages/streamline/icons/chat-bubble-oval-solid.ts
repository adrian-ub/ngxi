import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleOvalSolidIcon],svg[streamline-chat-bubble-oval-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.02.736a6.954 6.954 0 0 0-8.95 9.897l-.993 2.645a.5.5 0 0 0 .556.668l3.466-.627A6.953 6.953 0 0 0 10.02.736" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineChatBubbleOvalSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
