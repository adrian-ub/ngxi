import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1MultiplyIcon],svg[noto-v1-multiply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#757f3f" d="M105.72 16.06c-3.08-3.09-8.13-3.08-11.21 0L69.6 40.97c-3.08 3.08-8.13 3.08-11.21 0l-24.91-24.9c-3.08-3.08-8.12-3.08-11.21 0l-6.21 6.21c-3.08 3.09-3.08 8.13 0 11.21L40.97 58.4c3.08 3.08 3.08 8.13 0 11.21l-24.91 24.9c-3.08 3.08-3.08 8.12 0 11.21l6.22 6.22c3.08 3.08 8.13 3.08 11.21 0L58.4 87.03c3.08-3.08 8.13-3.08 11.21 0l24.91 24.91c3.08 3.08 8.13 3.08 11.21 0l6.21-6.22c3.08-3.09 3.08-8.13 0-11.21l-24.91-24.9c-3.08-3.08-3.08-8.13 0-11.21l24.91-24.91c3.08-3.08 3.08-8.13 0-11.21z"></svg:path>`,
})
export class NotoV1MultiplyIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
