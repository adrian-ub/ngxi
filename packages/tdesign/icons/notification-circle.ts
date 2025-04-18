import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignNotificationCircleIcon],svg[tdesign-notification-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m11-9c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-9.268 5a2 2 0 0 1-3.464 0H6v-2.736l1-2V10a5 5 0 0 1 10 0v2.264l1 2V17zM8 15h8v-.264l-1-2V10a3 3 0 1 0-6 0v2.736l-1 2z"></svg:path>`,
})
export class TdesignNotificationCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
