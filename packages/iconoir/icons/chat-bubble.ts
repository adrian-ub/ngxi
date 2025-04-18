import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirChatBubbleIcon],svg[iconoir-chat-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="M17 12.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m-5 0a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m-5 0a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.96 9.96 0 0 0 12 22"></svg:path></svg:g>`,
})
export class IconoirChatBubbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
