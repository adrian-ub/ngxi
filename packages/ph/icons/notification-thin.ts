import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNotificationThinIcon],svg[ph-notification-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 128v80a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h80a4 4 0 0 1 0 8H48a4 4 0 0 0-4 4v152a4 4 0 0 0 4 4h152a4 4 0 0 0 4-4v-80a4 4 0 0 1 8 0m16-68a32 32 0 1 1-32-32a32 32 0 0 1 32 32m-8 0a24 24 0 1 0-24 24a24 24 0 0 0 24-24"></svg:path>`,
})
export class PhNotificationThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
