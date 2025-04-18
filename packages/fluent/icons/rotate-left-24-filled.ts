import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRotateLeft24FilledIcon],svg[fluent-rotate-left-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 15a.75.75 0 0 1 0-1.5h.5c2.485 0 4.5-1.567 4.5-3.5c0-1.874-1.895-3.405-4.275-3.496L15 6.5H8.061l1.72 1.72a.75.75 0 0 1-.977 1.133L8.72 9.28l-3-3a.75.75 0 0 1 0-1.06l3-3l.084-.073A.75.75 0 0 1 9.78 3.28L8.062 5H15c3.314 0 6 2.239 6 5s-2.686 5-6 5zm-11-4.633a.5.5 0 0 0-.5.5V20a1 1 0 0 0 1 1h16.138a.5.5 0 0 0 .251-.933L3.751 10.435a.5.5 0 0 0-.251-.068"></svg:path>`,
})
export class FluentRotateLeft24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
