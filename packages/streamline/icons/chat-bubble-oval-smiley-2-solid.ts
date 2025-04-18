import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleOvalSmiley2SolidIcon],svg[streamline-chat-bubble-oval-smiley-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.998.06a6.94 6.94 0 1 1-2.892 13.246l-3.458.626a.5.5 0 0 1-.557-.668l.991-2.64A6.94 6.94 0 0 1 6.998.06M4.75 5.313a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m5.219-.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M10.5 7.5a3.5 3.5 0 1 1-7 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineChatBubbleOvalSmiley2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
