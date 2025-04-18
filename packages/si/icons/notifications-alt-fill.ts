import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siNotificationsAltFillIcon],svg[si-notifications-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 18a1 1 0 0 1-.894-1.447L6 12.764V10c0-3.728 2.55-6.86 6-7.748c3.45.888 6 4.02 6 7.748v2.764l1.894 3.789A1 1 0 0 1 19 18zm3.126 1a4.002 4.002 0 0 0 7.748 0z" clip-rule="evenodd"></svg:path>`,
})
export class SiNotificationsAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
