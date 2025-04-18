import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalendar6Icon],svg[arcticons-calendar-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="24" cy="30.667" r="5.333"></svg:circle><svg:path d="M28.74 21.975C27.95 20.79 26.569 20 24.396 20H24a5.31 5.31 0 0 0-5.333 5.333v5.334"></svg:path></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="32.5" cy="11" r="2.5"></svg:circle><svg:circle cx="15.5" cy="11" r="2.5"></svg:circle><svg:rect width="37" height="37" x="5.5" y="5.5" rx="4" ry="4"></svg:rect></svg:g>`,
})
export class ArcticonsCalendar6Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
