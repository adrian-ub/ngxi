import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolLockIcon],svg[websymbol-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M582 413v356q0 32-32 32H32q-32 0-32-32V413q0-10 3-16.5t7-10t12-5t13-2t15.5 0t14.5.5V253h1q9-87 74-140.5T293 59t151 62.5T515 273h1l2 107q4 0 14.5-.5t15 0t13 2t12 5t6.5 10t3 16.5M421 251q0-51-37-74t-91-23q-53 0-92 25.5T162 256v124h259z"></svg:path>`,
})
export class WebsymbolLockIcon {
  readonly viewBox = input("0 0 582 1000")
  readonly width = input("0.59em")
  readonly height = input("1em")
}
