import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowClockwise20FilledIcon],svg[fluent-arrow-clockwise-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10a6 6 0 0 1 9.969-4.5H12.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-1.5 0v1.16a7.5 7.5 0 1 0 2.495 5.313a.75.75 0 0 0-1.5.054q.006.11.005.223a6 6 0 0 1-12 0"></svg:path>`,
})
export class FluentArrowClockwise20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
