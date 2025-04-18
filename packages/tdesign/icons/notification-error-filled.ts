import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignNotificationErrorFilledIcon],svg[tdesign-notification-error-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8a8 8 0 1 1 16 0v4.697l2 3V20H2v-4.303l2-3zm7-2v6h2V6zm2.004 7.5H11v2.004h2.004zM8.645 21a3.502 3.502 0 0 0 6.71 0z"></svg:path>`,
})
export class TdesignNotificationErrorFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
