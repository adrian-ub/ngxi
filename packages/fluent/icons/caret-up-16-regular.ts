import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCaretUp16RegularIcon],svg[fluent-caret-up-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.136 9.427a1 1 0 0 0 .82 1.571h6.087a1 1 0 0 0 .82-1.571L9.232 5.643a1.5 1.5 0 0 0-2.462 0zm.82.571L7.59 6.214a.5.5 0 0 1 .821 0l2.633 3.784z"></svg:path>`,
})
export class FluentCaretUp16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
