import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciNotificationDotIcon],svg[ci-notification-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2Zm8-3H4v-2l2-1v-5.5a8.065 8.065 0 0 1 .924-4.06A4.654 4.654 0 0 1 10 4.18V2h3.646a4.5 4.5 0 0 0 4.3 7.4c.035.357.052.727.052 1.1V16l2 1v2H20ZM17 8a3 3 0 1 1 .01-6A3 3 0 0 1 17 8Z"></svg:path>`,
})
export class CiNotificationDotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
