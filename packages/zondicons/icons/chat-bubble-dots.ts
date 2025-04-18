import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsChatBubbleDotsIcon],svg[zondicons-chat-bubble-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 15l-4 4v-4H2a2 2 0 0 1-2-2V3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2zM5 7v2h2V7zm4 0v2h2V7zm4 0v2h2V7z"></svg:path>`,
})
export class ZondiconsChatBubbleDotsIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
