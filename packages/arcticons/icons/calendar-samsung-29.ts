import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalendarSamsung29Icon],svg[arcticons-calendar-samsung-29-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.662 25.333c0-2.963 2.37-5.333 5.136-5.333s5.334 2.37 5.334 5.333c0 1.383-.593 2.766-1.58 3.753c-2.174 1.778-8.89 6.914-8.89 6.914h10.47"></svg:path><svg:circle cx="30.172" cy="25.333" r="5.333"></svg:circle><svg:path d="M25.43 34.025C26.22 35.21 27.605 36 29.778 36h.395a5.31 5.31 0 0 0 5.333-5.333v-5.334"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-4v1a3.5 3.5 0 1 1-7 0v-1h-8v1a3.5 3.5 0 1 1-7 0v-1h-3a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsCalendarSamsung29Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
