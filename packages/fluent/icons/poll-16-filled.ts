import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPoll16FilledIcon],svg[fluent-poll-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0zM1 9a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0zm10-2a2 2 0 1 1 4 0v6a2 2 0 1 1-4 0z"></svg:path>`,
})
export class FluentPoll16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
