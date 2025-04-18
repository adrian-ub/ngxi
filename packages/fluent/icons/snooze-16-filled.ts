import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSnooze16FilledIcon],svg[fluent-snooze-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7.5h2.5a.75.75 0 0 1 .665 1.097l-.055.089L5.457 11h1.042a.75.75 0 0 1 .102 1.493L6.5 12.5H4a.75.75 0 0 1-.665-1.097l.055-.089L5.042 9H3.999a.75.75 0 0 1-.101-1.493zh2.5zm5-5h3.5a.75.75 0 0 1 .681 1.063l-.049.09L10.366 8h2.133a.75.75 0 0 1 .102 1.493L12.5 9.5H9a.75.75 0 0 1-.682-1.063l.05-.09L11.133 4H9a.75.75 0 0 1-.101-1.493zh3.5z"></svg:path>`,
})
export class FluentSnooze16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
