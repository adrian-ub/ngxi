import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoNotificationIcon],svg[entypo-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8.38V17H3V5h8.62c-.073-.322-.12-.655-.12-1s.047-.678.12-1H3c-1.102 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8.38c-.322.073-.655.12-1 .12s-.678-.047-1-.12M16 1a3 3 0 1 0 0 6a3 3 0 0 0 0-6"></svg:path>`,
})
export class EntypoNotificationIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
