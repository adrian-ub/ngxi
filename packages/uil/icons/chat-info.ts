import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilChatInfoIcon],svg[uil-chat-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.29 3.71a1 1 0 0 0 1.42 0a1.2 1.2 0 0 0 .21-.33A1 1 0 0 0 21 3a1 1 0 0 0-.29-.71l-.15-.12a.8.8 0 0 0-.18-.09a1 1 0 0 0-1.09.21A1 1 0 0 0 19 3a1 1 0 0 0 .08.38a1.2 1.2 0 0 0 .21.33M20 5a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1m.06 8a1 1 0 0 0-1.11.87A7 7 0 0 1 12 20H6.41l.64-.63a1 1 0 0 0 0-1.41A7 7 0 0 1 12 6a6.9 6.9 0 0 1 3.49.94a1 1 0 0 0 1-1.72A8.84 8.84 0 0 0 12 4a9 9 0 0 0-7 14.62l-1.71 1.67a1 1 0 0 0-.21 1.09A1 1 0 0 0 4 22h8a9 9 0 0 0 8.93-7.88a1 1 0 0 0-.87-1.12"></svg:path>`,
})
export class UilChatInfoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
