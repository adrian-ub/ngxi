import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesEmailActionUnreadOutlineIcon],svg[bubbles-email-action-unread-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M1.5 4.75h21v15h-21z"></svg:path><svg:path d="m22.161 5.3l-8.144 6.264a3.31 3.31 0 0 1-4.034 0L1.839 5.3"></svg:path></svg:g>`,
})
export class BubblesEmailActionUnreadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
