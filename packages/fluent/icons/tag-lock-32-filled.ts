import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTagLock32FilledIcon],svg[fluent-tag-lock-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.636 3.952A3.25 3.25 0 0 1 17.934 3h7.818a3.25 3.25 0 0 1 3.25 3.25v7.818a3.25 3.25 0 0 1-.952 2.298l-.518.518a5 5 0 0 0-9.452 1.222A4 4 0 0 0 15 22v6q0 .43.088.836a3.25 3.25 0 0 1-3.314-.79l-7.818-7.818a3.25 3.25 0 0 1 0-4.596zM23 11a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-3.5 8.5H19a2.5 2.5 0 0 0-2.5 2.5v6a2.5 2.5 0 0 0 2.5 2.5h8a2.5 2.5 0 0 0 2.5-2.5v-6a2.5 2.5 0 0 0-2.5-2.5h-.5V19a3.5 3.5 0 1 0-7 0zm2-.5a1.5 1.5 0 0 1 3 0v.5h-3zm3.5 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class FluentTagLock32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
