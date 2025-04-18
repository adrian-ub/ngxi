import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundUnreadLinearIcon],svg[solar-chat-round-unread-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="3" cy="3" r="3" transform="matrix(-1 0 0 1 22 2)"></svg:circle><svg:path stroke-linecap="round" d="M14 2.2q-.97-.198-2-.2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10q-.002-1.03-.2-2"></svg:path></svg:g>`,
})
export class SolarChatRoundUnreadLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
