import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowClockwise32FilledIcon],svg[fluent-arrow-clockwise-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 16c0-5.799 4.701-10.5 10.5-10.5c2.594 0 4.968.94 6.801 2.5H20.75a1.25 1.25 0 1 0 0 2.5h5c.69 0 1.25-.56 1.25-1.25v-5a1.25 1.25 0 1 0-2.5 0v1.914A12.95 12.95 0 0 0 16 3C8.82 3 3 8.82 3 16s5.82 13 13 13s13-5.82 13-13q0-.419-.026-.831a1.25 1.25 0 1 0-2.495.157q.021.335.021.674c0 5.799-4.701 10.5-10.5 10.5S5.5 21.799 5.5 16"></svg:path>`,
})
export class FluentArrowClockwise32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
