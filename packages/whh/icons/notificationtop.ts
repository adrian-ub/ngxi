import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhNotificationtopIcon],svg[whh-notificationtop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M855 1024H169q-57 0-113-57T0 852V428q0-58 56-115t113-57h151L512 0l192 256h151q57 0 113 57t56 115v424q0 58-56 115t-113 57m-23-576H192q-26 0-45 19t-19 45t19 45t45 19h640q26 0 45-19t19-45t-19-45t-45-19m0 256H192q-26 0-45 18.5t-19 45t19 45.5t45 19h640q26 0 45-19t19-45.5t-19-45t-45-18.5"></svg:path>`,
})
export class WhhNotificationtopIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
