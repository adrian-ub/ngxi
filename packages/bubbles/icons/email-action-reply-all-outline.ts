import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesEmailActionReplyAllOutlineIcon],svg[bubbles-email-action-reply-all-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12.75 6.837a1.5 1.5 0 0 0-2.6-1.018l-5.461 5.914a1.5 1.5 0 0 0 0 2.034l5.459 5.914a1.5 1.5 0 0 0 2.6-1.018V15.75h3a7.5 7.5 0 0 1 7.5 7.5v-6a7.5 7.5 0 0 0-7.5-7.5h-3z"></svg:path><svg:path d="m6.606 5.82l-5.458 5.913a1.5 1.5 0 0 0 0 2.034l5.458 5.914"></svg:path></svg:g>`,
})
export class BubblesEmailActionReplyAllOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
