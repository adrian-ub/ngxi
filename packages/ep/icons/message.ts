import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epMessageIcon],svg[ep-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64"></svg:path><svg:path fill="currentColor" d="M904 224L656.512 506.88a192 192 0 0 1-289.024 0L120 224zm-698.944 0l210.56 240.704a128 128 0 0 0 192.704 0L818.944 224z"></svg:path>`,
})
export class EpMessageIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
