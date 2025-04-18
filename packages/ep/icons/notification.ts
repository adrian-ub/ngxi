import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epNotificationIcon],svg[ep-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 128v64H256a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V512h64v256a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V256a128 128 0 0 1 128-128z"></svg:path><svg:path fill="currentColor" d="M768 384a128 128 0 1 0 0-256a128 128 0 0 0 0 256m0 64a192 192 0 1 1 0-384a192 192 0 0 1 0 384"></svg:path>`,
})
export class EpNotificationIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
