import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqChatAlertLeft3Icon],svg[marketeq-chat-alert-left-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M25.104 28.125h-.208"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M25 18.75v-4.167"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M41.667 6.25H8.333A2.083 2.083 0 0 0 6.25 8.333v27.084A2.083 2.083 0 0 0 8.333 37.5h8.334v6.25l10.416-6.25h14.584a2.083 2.083 0 0 0 2.083-2.083V8.333a2.083 2.083 0 0 0-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqChatAlertLeft3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
