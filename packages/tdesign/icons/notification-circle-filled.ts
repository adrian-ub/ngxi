import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignNotificationCircleFilledIcon],svg[tdesign-notification-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11M6.5 16.5h3.378a2.25 2.25 0 0 0 4.244 0H17.5v-1.618l-1-2V10.5a4.5 4.5 0 1 0-9 0v2.382l-1 2z"></svg:path>`,
})
export class TdesignNotificationCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
