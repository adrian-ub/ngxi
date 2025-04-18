import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCounterclockwise32FilledIcon],svg[fluent-arrow-counterclockwise-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.5 16c0-5.799-4.701-10.5-10.5-10.5c-2.594 0-4.968.94-6.801 2.5h2.051a1.25 1.25 0 1 1 0 2.5h-5C5.56 10.5 5 9.94 5 9.25v-5a1.25 1.25 0 1 1 2.5 0v1.914A12.95 12.95 0 0 1 16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13S3 23.18 3 16q0-.419.026-.831a1.25 1.25 0 1 1 2.495.157A11 11 0 0 0 5.5 16c0 5.799 4.701 10.5 10.5 10.5S26.5 21.799 26.5 16"></svg:path>`,
})
export class FluentArrowCounterclockwise32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
