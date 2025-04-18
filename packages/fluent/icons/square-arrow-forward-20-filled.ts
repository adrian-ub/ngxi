import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSquareArrowForward20FilledIcon],svg[fluent-square-arrow-forward-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.6A5.5 5.5 0 0 1 17 9.6V6a3 3 0 0 0-3-3zm8.5 16a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m.896-6.396l.897.896H14.75A2.75 2.75 0 0 0 12 16.25v.25a.5.5 0 0 0 1 0v-.25c0-.966.784-1.75 1.75-1.75h1.543l-.897.896a.5.5 0 0 0 .708.708l1.752-1.753a.5.5 0 0 0-.002-.705l-1.75-1.75a.5.5 0 0 0-.708.708"></svg:path>`,
})
export class FluentSquareArrowForward20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
