import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundDotsBrokenIcon],svg[solar-chat-round-dots-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-width="1.5" d="M17 3.338A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10c0-1.821-.487-3.53-1.338-5"></svg:path><svg:path stroke-linejoin="round" stroke-width="2" d="M8 12h.009m3.982 0H12m3.991 0H16"></svg:path></svg:g>`,
})
export class SolarChatRoundDotsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
