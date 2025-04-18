import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCaretLeft16RegularIcon],svg[fluent-caret-left-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.429 11.864a1 1 0 0 0 1.57-.821V4.957a1 1 0 0 0-1.57-.821L5.644 6.769a1.5 1.5 0 0 0 0 2.462zm.57-.821L6.216 8.41a.5.5 0 0 1 0-.82L10 4.956z"></svg:path>`,
})
export class FluentCaretLeft16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
