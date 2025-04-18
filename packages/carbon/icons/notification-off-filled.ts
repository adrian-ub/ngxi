import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonNotificationOffFilledIcon],svg[carbon-notification-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 16.586V13a9.9 9.9 0 0 0-1.087-4.499L30 3.414L28.586 2L2 28.586L3.414 30l6-6H11v1a5 5 0 0 0 10 0v-1h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-.293-.707zM19 25a3 3 0 0 1-6 0v-1h6zm2.61-20.262A9.9 9.9 0 0 0 17 3.051V1h-2v2.05A10.014 10.014 0 0 0 6 13v3.586l-2.707 2.707A1 1 0 0 0 3 20v3a1 1 0 0 0 .059.29z"></svg:path>`,
})
export class CarbonNotificationOffFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
