import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceMuteNotificationIcon],svg[guidance-mute-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M14.5 20a2.5 2.5 0 0 1-5 0M.5.5l23 23m-6-6h5v-.25l-.848-.908a12 12 0 0 1-3.134-6.7l-.336-2.684A6.23 6.23 0 0 0 6.011 6.01M14 17.5H1.5v-.25l.848-.908a12 12 0 0 0 3.134-6.7l.074-.586"></svg:path>`,
})
export class GuidanceMuteNotificationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
