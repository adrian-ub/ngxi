import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riNotificationBadgeFillIcon],svg[ri-notification-badge-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.341 4A6 6 0 0 0 21 11.659V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM19 10a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path>`,
})
export class RiNotificationBadgeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
