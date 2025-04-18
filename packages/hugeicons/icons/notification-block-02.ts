import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNotificationBlock02Icon],svg[hugeicons-notification-block-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 2.424A7.5 7.5 0 0 0 11.5 2C7.344 2 3.975 5.358 3.975 9.5c0 1.072-.062 2.08-.69 3.003c-.478.697-1.124 1.41-1.255 2.267c-.213 1.394.738 2.361 1.902 2.843c4.463 1.85 10.673 1.85 15.136 0c1.164-.482 2.115-1.45 1.902-2.843c-.1-.655-.5-1.226-.898-1.77"></svg:path><svg:path d="m15.05 5.05l4.9 4.9M21 7.5a3.5 3.5 0 1 0-7 0a3.5 3.5 0 0 0 7 0M7.5 19c.458 1.725 2.076 3 4 3c1.925 0 3.541-1.275 4-3"></svg:path></svg:g>`,
})
export class HugeiconsNotificationBlock02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
