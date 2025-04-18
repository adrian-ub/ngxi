import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowReplyAll16FilledIcon],svg[fluent-arrow-reply-all-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.03 3.22a.75.75 0 0 1 0 1.06L7.81 6.5h.44A5.75 5.75 0 0 1 14 12.25a.75.75 0 0 1-1.5 0A4.25 4.25 0 0 0 8.25 8h-.44l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0m-3.25 0a.75.75 0 0 1 0 1.06L3.81 7.25l2.97 2.97a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class FluentArrowReplyAll16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
