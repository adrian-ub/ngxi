import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsCalendarIcon],svg[humbleicons-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linejoin="round" d="M4 6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4H4z"></svg:path><svg:path stroke-linecap="round" d="M8 6.5v-3m8 3v-3"></svg:path><svg:path stroke-linejoin="round" d="M4 10h16v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class HumbleiconsCalendarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
