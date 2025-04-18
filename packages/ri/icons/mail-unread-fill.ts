import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMailUnreadFillIcon],svg[ri-mail-unread-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.803 8.493A5.02 5.02 0 0 0 22 8.9V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h13.1q-.1.486-.1 1a4.98 4.98 0 0 0 1.193 3.241l-5.132 4.442l-6.414-5.445l-1.294 1.524l7.72 6.555zM21 7a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class RiMailUnreadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
