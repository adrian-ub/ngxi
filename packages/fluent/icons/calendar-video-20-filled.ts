import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarVideo20FilledIcon],svg[fluent-calendar-video-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5V5H2zM2 6h12v2H8.5A3.5 3.5 0 0 0 5 11.5V14h-.5A2.5 2.5 0 0 1 2 11.5zm4 5.5A2.5 2.5 0 0 1 8.5 9h5a2.5 2.5 0 0 1 2.5 2.5v.129l2.035-1.405a1.25 1.25 0 0 1 1.96 1.028v5.498a1.25 1.25 0 0 1-1.96 1.028L16 16.373v.127a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 6 16.5z"></svg:path>`,
})
export class FluentCalendarVideo20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
