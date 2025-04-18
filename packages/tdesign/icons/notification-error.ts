import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignNotificationErrorIcon],svg[tdesign-notification-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8a8 8 0 1 1 16 0v4.697l2 3V20h-5.611a4.502 4.502 0 0 1-8.777 0H2v-4.303l2-3zm16 10v-1.697l-2-3V8A6 6 0 0 0 6 8v5.303l-2 3V18zm-5.708 2H9.708a2.5 2.5 0 0 0 4.584 0M13 6v6h-2V6zm-2 7.5h2.004v2.004H11z"></svg:path>`,
})
export class TdesignNotificationErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
