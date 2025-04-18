import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCaretRight24RegularIcon],svg[fluent-caret-right-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.073 18.839c-.808.707-2.073.133-2.073-.94V6.101c0-1.074 1.265-1.648 2.073-.94l6.31 5.521a1.75 1.75 0 0 1 0 2.634zm-.573-1.492l5.896-5.159a.25.25 0 0 0 0-.376L10.5 6.653z"></svg:path>`,
})
export class FluentCaretRight24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
