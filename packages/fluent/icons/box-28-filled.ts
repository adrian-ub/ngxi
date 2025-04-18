import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBox28FilledIcon],svg[fluent-box-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.395 2.5a3.75 3.75 0 0 0-2.786 0L9.69 3.668l11.25 4.499l4.108-1.644a2.8 2.8 0 0 0-.776-.472zm3.525 6.475l-11.25-4.5l-3.938 1.576a2.7 2.7 0 0 0-.776.472l11.046 4.42zm-16.916-.37q.001-.416.118-.8l11.13 4.453v13.435a4 4 0 0 1-.643-.192L3.732 21.95a2.75 2.75 0 0 1-1.728-2.554zM15.395 25.5q-.316.126-.643.192V12.258l11.13-4.453q.117.384.118.8v10.791a2.75 2.75 0 0 1-1.728 2.554z"></svg:path>`,
})
export class FluentBox28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
