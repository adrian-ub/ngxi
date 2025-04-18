import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUpLeft16FilledIcon],svg[fluent-arrow-up-left-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2.75A.75.75 0 0 0 8.25 2h-5.5a.75.75 0 0 0-.75.75v5.5a.75.75 0 0 0 1.5 0V4.56l9.22 9.22a.75.75 0 0 0 1.06-1.06L4.56 3.5h3.69A.75.75 0 0 0 9 2.75"></svg:path>`,
})
export class FluentArrowUpLeft16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
