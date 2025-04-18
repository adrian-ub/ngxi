import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCaretLeft12FilledIcon],svg[fluent-caret-left-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.299 3.282C6.93 2.659 8 3.107 8 3.994v4.012c0 .887-1.07 1.335-1.701.713L4.26 6.713a1 1 0 0 1 0-1.425z"></svg:path>`,
})
export class FluentCaretLeft12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
