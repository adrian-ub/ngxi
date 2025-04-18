import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCounterclockwise24FilledIcon],svg[fluent-arrow-counterclockwise-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 12A7 7 0 0 0 8.392 6H9a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v.516a9 9 0 1 1-3.93 6.36a1 1 0 1 1 1.984.248Q5 11.554 5 12a7 7 0 1 0 14 0"></svg:path>`,
})
export class FluentArrowCounterclockwise24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
