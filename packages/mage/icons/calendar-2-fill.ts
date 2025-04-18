import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageCalendar2FillIcon],svg[mage-calendar-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.75 3.935v-1.31a.75.75 0 1 0-1.5 0v1.25h-8.5v-1.25a.75.75 0 1 0-1.5 0v1.31a4.76 4.76 0 0 0-4 4.69v8.75A4.75 4.75 0 0 0 7 22.125h10a4.75 4.75 0 0 0 4.75-4.75v-8.75a4.76 4.76 0 0 0-4-4.69m-9.35 14h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 1 1 0 1.5m0-3.08h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 1 1 0 1.5m4.11 3.08h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 1 1 0 1.5m0-3.08h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 1 1 0 1.5m4.11 3.08h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 1 1 0 1.5m0-3.08h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 1 1 0 1.5m3.63-5H3.75v-1.25a3.24 3.24 0 0 1 2.5-3.15v1.15a.75.75 0 1 0 1.5 0v-1.25h8.5v1.25a.75.75 0 1 0 1.5 0v-1.15a3.24 3.24 0 0 1 2.5 3.15z"></svg:path>`,
})
export class MageCalendar2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
