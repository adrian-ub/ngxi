import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowClockwise24FilledIcon],svg[fluent-arrow-clockwise-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12a7 7 0 0 1 10.608-6H15a1 1 0 1 0 0 2h3a1 1 0 0 0 1-1V4a1 1 0 1 0-2 0v.516a9 9 0 1 0 3.93 6.36a1 1 0 1 0-1.984.248q.053.43.054.876a7 7 0 1 1-14 0"></svg:path>`,
})
export class FluentArrowClockwise24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
