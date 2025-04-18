import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCaretRight12FilledIcon],svg[fluent-caret-right-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.702 3.282C5.069 2.659 4 3.107 4 3.994v4.012c0 .887 1.07 1.335 1.702.713l2.037-2.006a1 1 0 0 0 0-1.425z"></svg:path>`,
})
export class FluentCaretRight12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
