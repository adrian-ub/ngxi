import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUp16FilledIcon],svg[fluent-arrow-up-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 14a.75.75 0 0 1-.75-.75V4.463L4.309 7.75a.75.75 0 0 1-1.118-1L7.441 2A.75.75 0 0 1 8.56 2l4.25 4.75a.75.75 0 1 1-1.118 1L8.75 4.463v8.787A.75.75 0 0 1 8 14"></svg:path>`,
})
export class FluentArrowUp16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
