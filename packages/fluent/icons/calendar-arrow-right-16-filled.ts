import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarArrowRight16FilledIcon],svg[fluent-calendar-arrow-right-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 6H2v5.5A2.5 2.5 0 0 0 4.5 14h2.1a5.5 5.5 0 0 1 4.9-8M14 4.5A2.5 2.5 0 0 0 11.5 2h-7A2.5 2.5 0 0 0 2 4.5V5h12zM11.5 7a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m2.353 4.854l.003-.003a.5.5 0 0 0 .144-.348v-.006a.5.5 0 0 0-.146-.35l-2-2a.5.5 0 0 0-.708.707L12.293 11H9.5a.5.5 0 0 0 0 1h2.793l-1.147 1.146a.5.5 0 0 0 .708.708z"></svg:path>`,
})
export class FluentCalendarArrowRight16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
