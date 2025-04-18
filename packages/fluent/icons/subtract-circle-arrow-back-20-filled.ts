import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSubtractCircleArrowBack20FilledIcon],svg[fluent-subtract-circle-arrow-back-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.979 9.589a8 8 0 1 0-7.39 7.39A5.5 5.5 0 0 1 12.206 9.5H5.5a.5.5 0 0 1 0-1h7a.5.5 0 0 1 .448.722A5.5 5.5 0 0 1 14.5 9c.892 0 1.734.212 2.479.589M19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-5.396-2.604a.5.5 0 0 0-.708 0l-1.75 1.75a.5.5 0 0 0-.002.705l1.752 1.753a.5.5 0 0 0 .708-.708l-.897-.896h1.543c.966 0 1.75.784 1.75 1.75v.25a.5.5 0 0 0 1 0v-.25a2.75 2.75 0 0 0-2.75-2.75h-1.543l.897-.896a.5.5 0 0 0 0-.708"></svg:path>`,
})
export class FluentSubtractCircleArrowBack20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
