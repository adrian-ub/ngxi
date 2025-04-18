import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMicProhibited16FilledIcon],svg[fluent-mic-prohibited-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4.5a2.5 2.5 0 0 1 5 0v.707a5.5 5.5 0 0 0-3.979 4.809A2.5 2.5 0 0 1 4 8zm1.042 6.683A3.5 3.5 0 0 1 3 8a.5.5 0 0 0-1 0a4.5 4.5 0 0 0 3.316 4.343a5.5 5.5 0 0 1-.274-1.16M6 10.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0m2.404 2.803l4.9-4.9a3.5 3.5 0 0 1-4.9 4.9m-.707-.707a3.5 3.5 0 0 1 4.9-4.9z"></svg:path>`,
})
export class FluentMicProhibited16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
