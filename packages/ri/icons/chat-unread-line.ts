import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riChatUnreadLineIcon],svg[ri-chat-unread-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7a3 3 0 1 0 0-6a3 3 0 0 0 0 6m1 11V8.9a5 5 0 0 1-2 0V17H5.763L4 18.385V5h12.1a5 5 0 0 1 0-2H3a1 1 0 0 0-1 1v18.5L6.455 19H21a1 1 0 0 0 1-1"></svg:path>`,
})
export class RiChatUnreadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
