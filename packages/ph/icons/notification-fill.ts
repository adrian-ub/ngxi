import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNotificationFillIcon],svg[ph-notification-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 128v80a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h80a8 8 0 0 1 0 16H48v152h152v-80a8 8 0 0 1 16 0M196 24a36 36 0 1 0 36 36a36 36 0 0 0-36-36"></svg:path>`,
})
export class PhNotificationFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
