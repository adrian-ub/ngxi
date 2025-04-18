import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalendar10Icon],svg[arcticons-calendar-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.251 30.667c0 2.963 2.37 5.333 5.334 5.333s5.135-2.37 5.135-5.333v-5.334c0-2.963-2.37-5.333-5.135-5.333s-5.334 2.37-5.334 5.333zM13.28 22.2l4-2.2m0 0v16"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="32.5" cy="11" r="2.5"></svg:circle><svg:circle cx="15.5" cy="11" r="2.5"></svg:circle><svg:rect width="37" height="37" x="5.5" y="5.5" rx="4" ry="4"></svg:rect></svg:g>`,
})
export class ArcticonsCalendar10Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
