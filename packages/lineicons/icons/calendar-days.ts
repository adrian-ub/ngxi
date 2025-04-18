import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsCalendarDaysIcon],svg[lineicons-calendar-days-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.185 12.75a.8.8 0 0 1 .8-.8h.01a.8.8 0 0 1 0 1.6h-.01a.8.8 0 0 1-.8-.8m.8 3.2a.8.8 0 0 0 0 1.6h.01a.8.8 0 0 0 0-1.6zm3.21-3.2a.8.8 0 0 1 .8-.8h.01a.8.8 0 0 1 0 1.6h-.01a.8.8 0 0 1-.8-.8m.8 3.2a.8.8 0 0 0 0 1.6h.01a.8.8 0 0 0 0-1.6zm3.21-3.2a.8.8 0 0 1 .8-.8h.01a.8.8 0 0 1 0 1.6h-.01a.8.8 0 0 1-.8-.8m.8 3.2a.8.8 0 0 0 0 1.6h.01a.8.8 0 0 0 0-1.6z"></svg:path><svg:path fill="currentColor" d="M8.75 2.75a.75.75 0 0 0-1.5 0v1H5.5A2.25 2.25 0 0 0 3.25 6v13a2.25 2.25 0 0 0 2.25 2.25h13A2.25 2.25 0 0 0 20.75 19V6a2.25 2.25 0 0 0-2.25-2.25h-1.75v-1a.75.75 0 0 0-1.5 0v1h-6.5zm10.5 5.5H4.75V6a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 .75.75zm-14.5 1.5h14.5V19a.75.75 0 0 1-.75.75h-13a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class LineiconsCalendarDaysIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
