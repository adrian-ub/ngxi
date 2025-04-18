import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCaretUp16FilledIcon],svg[fluent-caret-up-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.957 10.998a1 1 0 0 1-.821-1.571l2.633-3.784a1.5 1.5 0 0 1 2.462 0l2.633 3.784a1 1 0 0 1-.821 1.571z"></svg:path>`,
})
export class FluentCaretUp16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
