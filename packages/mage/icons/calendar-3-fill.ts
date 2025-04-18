import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageCalendar3FillIcon],svg[mage-calendar-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.75 3.935v-1.31a.75.75 0 1 0-1.5 0v1.25h-8.5v-1.25a.75.75 0 1 0-1.5 0v1.31a4.76 4.76 0 0 0-4 4.69v8.75A4.75 4.75 0 0 0 7 22.125h10a4.75 4.75 0 0 0 4.75-4.75v-8.75a4.76 4.76 0 0 0-4-4.69m-8 5.08a2.25 2.25 0 0 1 4.5 0a2.23 2.23 0 0 1-.58 1.5c.373.41.58.945.58 1.5a2.25 2.25 0 0 1-4.5 0c0-.555.207-1.09.58-1.5a2.23 2.23 0 0 1-.58-1.5m10.5 8.36a3.25 3.25 0 0 1-3.25 3.25H7a3.25 3.25 0 0 1-3.25-3.25v-.26h16.5z"></svg:path><svg:path fill="currentColor" d="M12 9.765a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m0 3a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5"></svg:path>`,
})
export class MageCalendar3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
