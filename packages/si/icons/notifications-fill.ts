import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siNotificationsFillIcon],svg[si-notifications-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.25a1.75 1.75 0 0 0-1.737 1.967A7 7 0 0 0 5 10v7H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2h-1v-7a7 7 0 0 0-5.263-6.783q.012-.106.013-.217A1.75 1.75 0 0 0 12 1.25M12 23a3 3 0 0 1-3-3h6a3 3 0 0 1-3 3"></svg:path>`,
})
export class SiNotificationsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
