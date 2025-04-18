import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNotificationBoldIcon],svg[ph-notification-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 132v76a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h76a12 12 0 0 1 0 24H52v144h144v-72a12 12 0 0 1 24 0m16-72a40 40 0 1 1-40-40a40 40 0 0 1 40 40m-24 0a16 16 0 1 0-16 16a16 16 0 0 0 16-16"></svg:path>`,
})
export class PhNotificationBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
