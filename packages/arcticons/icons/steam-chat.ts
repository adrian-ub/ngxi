import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSteamChatIcon],svg[arcticons-steam-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="31.058" cy="18.366" r="7.957" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="17.392" cy="32.081" r="5.62" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.852 33.025l-8.668-3.874M2.56 22.39l11.523 5.15"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="m23.1 18.367l-5.708 8.094m5.62 5.62l8.046-5.757"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5A21.5 21.5 0 0 0 2.5 24a23.14 23.14 0 0 0 2.665 10.297L2.5 45.5l11.174-2.658A21.494 21.494 0 1 0 24 2.5"></svg:path>`,
})
export class ArcticonsSteamChatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
