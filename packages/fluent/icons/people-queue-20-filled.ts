import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPeopleQueue20FilledIcon],svg[fluent-people-queue-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.75 5.25a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0M4 8a1 1 0 0 0-1 1v4.5a3.5 3.5 0 1 0 7 0V9a1 1 0 0 0-1-1zm5.75-2.75c0 .65-.19 1.255-.52 1.763c.413.048.787.22 1.084.48q.091.006.186.007a2.25 2.25 0 1 0-1.312-4.078c.354.521.562 1.15.562 1.828M9.5 16.855A4.5 4.5 0 0 0 11 13.5V9c0-.364-.098-.706-.268-1H13a1 1 0 0 1 1 1v4.5a3.5 3.5 0 0 1-4.5 3.355M13.75 5.25c0 .65-.19 1.255-.52 1.763c.413.048.787.22 1.084.48q.091.006.186.007a2.25 2.25 0 1 0-1.312-4.078c.354.521.562 1.15.562 1.828m-.25 11.605A4.5 4.5 0 0 0 15 13.5V9c0-.364-.098-.706-.268-1H17a1 1 0 0 1 1 1v4.5a3.5 3.5 0 0 1-4.5 3.355"></svg:path>`,
})
export class FluentPeopleQueue20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
