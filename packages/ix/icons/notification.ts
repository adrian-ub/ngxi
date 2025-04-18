import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixNotificationIcon],svg[ix-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 85.333V384H341.333v85.333L192 384H64V85.333zM405.333 128H106.667v213.333h96.664l95.336 54.464v-54.464h106.666z"></svg:path>`,
})
export class IxNotificationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
