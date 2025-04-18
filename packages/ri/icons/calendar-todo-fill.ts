import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCalendarTodoFillIcon],svg[ri-calendar-todo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2zM4 9v10h16V9zm2 2h2v2H6zm0 4h2v2H6zm4-4h8v2h-8zm0 4h5v2h-5z"></svg:path>`,
})
export class RiCalendarTodoFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
