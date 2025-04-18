import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siNotificationsLineIcon],svg[si-notifications-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4a6 6 0 0 0-6 6v8m6-14a6 6 0 0 1 6 6v8M12 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m8 14H4m10 2a2 2 0 1 1-4 0"></svg:path>`,
})
export class SiNotificationsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
