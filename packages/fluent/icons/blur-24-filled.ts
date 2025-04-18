import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBlur24FilledIcon],svg[fluent-blur-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12a9 9 0 0 1 13.977-7.5H12v1h6.225a9 9 0 0 1 1.26 1.5H12v1h8.064q.358.717.584 1.5H12v1h8.876q.123.733.124 1.5h-9v1h8.945a9 9 0 0 1-.297 1.5H12v1h8.294a9 9 0 0 1-.81 1.5H12v1h6.708A9 9 0 0 1 3 12"></svg:path>`,
})
export class FluentBlur24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
