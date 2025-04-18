import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPollOff16FilledIcon],svg[fluent-poll-off-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6.707V13a2 2 0 1 0 4 0v-2.293l1 1V13a2 2 0 0 0 3.016 1.723l.13.13a.5.5 0 0 0 .708-.707l-13-13a.5.5 0 1 0-.708.708zM11 7v1.879l4 4V7a2 2 0 1 0-4 0M6 3v.879l4 4V3a2 2 0 1 0-4 0M1 9a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0z"></svg:path>`,
})
export class FluentPollOff16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
