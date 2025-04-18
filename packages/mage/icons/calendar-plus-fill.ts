import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageCalendarPlusFillIcon],svg[mage-calendar-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.75 3.935v-1.31a.75.75 0 1 0-1.5 0v1.25h-8.5v-1.25a.75.75 0 1 0-1.5 0v1.31a4.76 4.76 0 0 0-4 4.69v8.75A4.75 4.75 0 0 0 7 22.125h10a4.75 4.75 0 0 0 4.75-4.75v-8.75a4.76 4.76 0 0 0-4-4.69m-3.25 11.78h-1.76v1.74a.75.75 0 1 1-1.5 0v-1.74H9.5a.75.75 0 1 1 0-1.5h1.74v-1.76a.75.75 0 1 1 1.5 0v1.76h1.76a.75.75 0 1 1 0 1.5m5.75-6.87H3.75v-.25a3.24 3.24 0 0 1 2.5-3.15v1.15a.75.75 0 1 0 1.5 0v-1.25h8.5v1.25a.75.75 0 1 0 1.5 0v-1.15a3.24 3.24 0 0 1 2.5 3.15z"></svg:path>`,
})
export class MageCalendarPlusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
