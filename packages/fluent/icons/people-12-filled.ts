import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPeople12FilledIcon],svg[fluent-people-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4m4.5 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M2.25 7C1.56 7 1 7.56 1 8.25c0 0 0 2.25 3 2.25c2.378 0 2.871-1.414 2.973-2C7 8.347 7 8.25 7 8.25C7 7.56 6.44 7 5.75 7zm5.746 1.6q-.003.06-.012.142a2.9 2.9 0 0 1-.42 1.16c.265.061.574.098.935.098c2.5 0 2.5-1.75 2.5-1.75c0-.69-.56-1.25-1.25-1.25H7.62c.24.358.379.787.379 1.25v.25z"></svg:path>`,
})
export class FluentPeople12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
