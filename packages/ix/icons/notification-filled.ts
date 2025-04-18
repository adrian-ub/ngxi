import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixNotificationFilledIcon],svg[ix-notification-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 85.333V384H341.333v85.333L192 384H64V85.333z"></svg:path>`,
})
export class IxNotificationFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
