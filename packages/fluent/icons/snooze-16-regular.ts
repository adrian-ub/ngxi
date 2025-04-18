import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSnooze16RegularIcon],svg[fluent-snooze-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.001 8h2.5a.5.5 0 0 1 .432.753l-.048.067L5.068 11h1.433a.5.5 0 0 1 .09.992L6.5 12H4a.5.5 0 0 1-.432-.753l.048-.067L5.433 9H4.001a.5.5 0 0 1-.09-.992zh2.5zm5-5h3.5a.5.5 0 0 1 .452.714l-.042.073L9.96 8h2.54a.5.5 0 0 1 .09.992L12.5 9H9a.5.5 0 0 1-.452-.714l.042-.073L11.541 4H9a.5.5 0 0 1-.09-.992zh3.5z"></svg:path>`,
})
export class FluentSnooze16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
