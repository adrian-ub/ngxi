import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDismissSquare24FilledIcon],svg[fluent-dismiss-square-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zm1.97 5.22a.75.75 0 0 1 1.06 0L12 10.94l2.72-2.72a.75.75 0 1 1 1.06 1.06L13.06 12l2.72 2.72a.75.75 0 1 1-1.06 1.06L12 13.06l-2.72 2.72a.75.75 0 0 1-1.06-1.06L10.94 12L8.22 9.28a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class FluentDismissSquare24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
