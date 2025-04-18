import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRotateRight24FilledIcon],svg[fluent-rotate-right-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 15a.75.75 0 0 0 0-1.5H9c-2.485 0-4.5-1.567-4.5-3.5c0-1.874 1.894-3.405 4.275-3.496L9 6.5h6.939l-1.72 1.72a.75.75 0 0 0 .977 1.133l.084-.073l3-3a.75.75 0 0 0 0-1.06l-3-3l-.084-.073a.75.75 0 0 0-.976 1.133L15.938 5H9c-3.314 0-6 2.239-6 5s2.686 5 6 5zm11-4.633a.5.5 0 0 1 .5.5V20a1 1 0 0 1-1 1H3.862a.5.5 0 0 1-.251-.933l16.638-9.632a.5.5 0 0 1 .251-.068"></svg:path>`,
})
export class FluentRotateRight24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
