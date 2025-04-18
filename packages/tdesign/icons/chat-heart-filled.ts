import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChatHeartFilledIcon],svg[tdesign-chat-heart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 2h-21v20.704L6.876 18H22.5zM8.288 6.555A2.75 2.75 0 0 1 12 6.393a2.75 2.75 0 0 1 3.713 4.052L12 14.157l-3.712-3.713a2.75 2.75 0 0 1 0-3.889"></svg:path>`,
})
export class TdesignChatHeartFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
