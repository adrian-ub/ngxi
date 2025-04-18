import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiChatCheckIcon],svg[mynaui-chat-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m9.5 12.323l1.379 1.575a.3.3 0 0 0 .466-.022l2.8-3.876"></svg:path><svg:path d="M12 21a9 9 0 1 0-9-9c0 1.44.338 2.8.94 4.007c.453.911-.177 2.14-.417 3.037a1.17 1.17 0 0 0 1.433 1.433c.897-.24 2.126-.87 3.037-.416A9 9 0 0 0 12 21"></svg:path></svg:g>`,
})
export class MynauiChatCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
