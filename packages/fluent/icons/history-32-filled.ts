import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHistory32FilledIcon],svg[fluent-history-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5.5c5.799 0 10.5 4.701 10.5 10.5S21.799 26.5 16 26.5S5.5 21.799 5.5 16q0-.34.021-.674a1.25 1.25 0 0 0-2.495-.157Q3 15.582 3 16c0 7.18 5.82 13 13 13s13-5.82 13-13S23.18 3 16 3c-3.25 0-6.222 1.193-8.5 3.164V4.25a1.25 1.25 0 1 0-2.5 0v5c0 .69.56 1.25 1.25 1.25h5a1.25 1.25 0 1 0 0-2.5H9.199A10.46 10.46 0 0 1 16 5.5m1 3.75a1.25 1.25 0 1 0-2.5 0v7c0 .69.56 1.25 1.25 1.25h5a1.25 1.25 0 1 0 0-2.5H17z"></svg:path>`,
})
export class FluentHistory32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
