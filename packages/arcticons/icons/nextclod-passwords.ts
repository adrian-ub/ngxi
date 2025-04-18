import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNextclodPasswordsIcon],svg[arcticons-nextclod-passwords-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.25 33H4.5V15h21.75M30 15h13.5v18H30"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.5 39.5H27c1.662 0 3-1.338 3-3v-25c0-1.662-1.338-3-3-3h-1.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.257 25.491a2.5 2.5 0 1 1-.006-2.99"></svg:path><svg:circle cx="13.5" cy="24" r="2.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.5 8.5H33c-1.662 0-3 1.338-3 3v25c0 1.662 1.338 3 3 3h1.5"></svg:path>`,
})
export class ArcticonsNextclodPasswordsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
