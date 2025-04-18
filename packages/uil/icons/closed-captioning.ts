import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilClosedCaptioningIcon],svg[uil-closed-captioning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.24 13.14a1 1 0 0 0-1.37.36a1 1 0 0 1-1.58.19A.93.93 0 0 1 8 13v-2a1 1 0 0 1 1.88-.48a1 1 0 0 0 1.37.34a1 1 0 0 0 .34-1.38a3 3 0 0 0-.46-.59A3 3 0 0 0 9 8a3 3 0 0 0-3 3v2a3 3 0 0 0 5.59 1.5a1 1 0 0 0-.35-1.36m6 0a1 1 0 0 0-1.37.36a1 1 0 0 1-1.58.19A.93.93 0 0 1 14 13v-2a1 1 0 0 1 1.88-.48a1 1 0 0 0 1.37.34a1 1 0 0 0 .34-1.38a3 3 0 0 0-.46-.59A3 3 0 0 0 15 8a3 3 0 0 0-3 3v2a3 3 0 0 0 5.59 1.5a1 1 0 0 0-.35-1.36M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path>`,
})
export class UilClosedCaptioningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
