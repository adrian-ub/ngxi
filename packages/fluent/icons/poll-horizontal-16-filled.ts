import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPollHorizontal16FilledIcon],svg[fluent-poll-horizontal-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6a2 2 0 1 1 0 4H3a2 2 0 1 1 0-4zM7 1a2 2 0 1 1 0 4H3a2 2 0 1 1 0-4zm2 10a2 2 0 1 1 0 4H3a2 2 0 1 1 0-4z"></svg:path>`,
})
export class FluentPollHorizontal16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
