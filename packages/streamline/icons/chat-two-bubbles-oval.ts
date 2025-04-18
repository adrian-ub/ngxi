import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineChatTwoBubblesOvalIcon],svg[streamline-chat-two-bubbles-oval-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.25 5a4.25 4.25 0 0 1 3.54 6.6l.71 1.9l-2.39-.43A4.25 4.25 0 1 1 9.25 5"></svg:path><svg:path d="M9.86 2.51A5.24 5.24 0 0 0 .5 5.75a5.2 5.2 0 0 0 .88 2.91L.5 11l2.12-.38"></svg:path></svg:g>`,
})
export class StreamlineChatTwoBubblesOvalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
