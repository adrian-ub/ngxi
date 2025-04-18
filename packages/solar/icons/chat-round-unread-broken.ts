import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundUnreadBrokenIcon],svg[solar-chat-round-unread-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="3" cy="3" r="3" transform="matrix(-1 0 0 1 22 2)"></svg:circle><svg:path stroke-linecap="round" d="M14 2.2a10.05 10.05 0 0 0-7 1.138M21.8 10q.198.97.2 2c0 5.523-4.477 10-10 10c-1.6 0-3.112-.376-4.452-1.044a1.63 1.63 0 0 0-1.149-.133l-2.226.596a1.3 1.3 0 0 1-1.591-1.592l.595-2.226a1.63 1.63 0 0 0-.134-1.148A9.96 9.96 0 0 1 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarChatRoundUnreadBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
