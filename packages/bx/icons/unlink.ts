import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxUnlinkIcon],svg[bx-unlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.949 14.121L19.071 12a5.01 5.01 0 0 0 0-7.071a5.006 5.006 0 0 0-7.071 0l-.707.707l1.414 1.414l.707-.707a3.007 3.007 0 0 1 4.243 0a3.005 3.005 0 0 1 0 4.243l-2.122 2.121a2.7 2.7 0 0 1-.844.57L13.414 12l1.414-1.414l-.707-.707a4.97 4.97 0 0 0-3.535-1.465c-.235 0-.464.032-.691.066L3.707 2.293L2.293 3.707l18 18l1.414-1.414l-5.536-5.536q.417-.276.778-.636m-6.363 3.536a3.007 3.007 0 0 1-4.243 0a3.005 3.005 0 0 1 0-4.243l1.476-1.475l-1.414-1.414L4.929 12a5.01 5.01 0 0 0 0 7.071a4.98 4.98 0 0 0 3.535 1.462A4.98 4.98 0 0 0 12 19.071l.707-.707l-1.414-1.414z"></svg:path>`,
})
export class BxUnlinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
