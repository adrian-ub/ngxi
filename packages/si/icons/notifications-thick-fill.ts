import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siNotificationsThickFillIcon],svg[si-notifications-thick-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18a1 1 0 0 1-.894-1.447L4 12.763V10a8 8 0 1 1 16 0v2.764l1.894 3.789A1 1 0 0 1 21 18zm9 4a4 4 0 0 1-3.874-3h7.748A4 4 0 0 1 12 22"></svg:path>`,
})
export class SiNotificationsThickFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
