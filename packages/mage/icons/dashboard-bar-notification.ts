import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDashboardBarNotificationIcon],svg[mage-dashboard-bar-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="19" cy="5" r="2.5" stroke-width="1.5"></svg:circle><svg:path stroke-linecap="round" stroke-width="1.5" d="M21.25 10v5.25a6 6 0 0 1-6 6h-6.5a6 6 0 0 1-6-6v-6.5a6 6 0 0 1 6-6H14"></svg:path><svg:path stroke-linecap="round" stroke-width="1.6" d="M8.276 16.036v-4.388m3.83 4.388V8.769m3.618 7.267v-5.51"></svg:path></svg:g>`,
})
export class MageDashboardBarNotificationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
