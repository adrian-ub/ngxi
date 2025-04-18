import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPollOff20FilledIcon],svg[fluent-poll-off-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8.707V16a2 2 0 1 0 4 0v-3.293l2 2V16a2 2 0 0 0 3.016 1.723l.13.13a.5.5 0 0 0 .708-.707l-15-15a.5.5 0 1 0-.708.708zM14 8v3.879l4 4V8a2 2 0 1 0-4 0M8 5.879l4 4V4a2 2 0 1 0-4 0zM4 10a2 2 0 0 0-2 2v4a2 2 0 1 0 4 0v-4a2 2 0 0 0-2-2"></svg:path>`,
})
export class FluentPollOff20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
