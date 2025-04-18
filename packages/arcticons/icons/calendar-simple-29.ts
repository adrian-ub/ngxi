import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalendarSimple29Icon],svg[arcticons-calendar-simple-29-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.662 25.333c0-2.963 2.37-5.333 5.136-5.333s5.334 2.37 5.334 5.333c0 1.383-.593 2.766-1.58 3.753c-2.174 1.778-8.89 6.914-8.89 6.914h10.47"></svg:path><svg:circle cx="30.172" cy="25.333" r="5.333"></svg:circle><svg:path d="M25.43 34.025C26.22 35.21 27.605 36 29.778 36h.395a5.31 5.31 0 0 0 5.333-5.333v-5.334"></svg:path></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="35" height="36" x="6.5" y="7.5" rx="4" ry="4"></svg:rect><svg:path d="M33.5 4.5v6m-19-6v6"></svg:path></svg:g>`,
})
export class ArcticonsCalendarSimple29Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
