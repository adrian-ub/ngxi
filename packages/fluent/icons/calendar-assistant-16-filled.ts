import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarAssistant16FilledIcon],svg[fluent-calendar-assistant-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 6H2v5.5A2.5 2.5 0 0 0 4.5 14h2.1a5.5 5.5 0 0 1 4.9-8M14 4.5A2.5 2.5 0 0 0 11.5 2h-7A2.5 2.5 0 0 0 2 4.5V5h12zm2 7a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-5.12-3a.5.5 0 0 0-.472.334l-.88 2.5A.5.5 0 0 0 10 12h.776l-.508 1.869a.5.5 0 0 0 .903.401l2.25-3.5A.5.5 0 0 0 13 10h-.746l.28-.842a.5.5 0 0 0-.474-.658z"></svg:path>`,
})
export class FluentCalendarAssistant16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
