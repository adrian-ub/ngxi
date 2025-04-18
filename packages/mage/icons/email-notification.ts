import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageEmailNotificationIcon],svg[mage-email-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21.25 10.745V16.5a4 4 0 0 1-4 4H6.75a4 4 0 0 1-4-4v-9a4 4 0 0 1 4-4h7.151"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.75 7.59L10 11.72a3.94 3.94 0 0 0 4 0l2.219-1.257"></svg:path><svg:circle cx="19" cy="5" r="2.5"></svg:circle></svg:g>`,
})
export class MageEmailNotificationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
