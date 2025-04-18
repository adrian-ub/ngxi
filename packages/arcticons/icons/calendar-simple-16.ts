import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalendarSimple16Icon],svg[arcticons-calendar-simple-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m14.28 22.2l4-2.2m0 0v16"></svg:path><svg:circle cx="29.205" cy="30.667" r="5.333"></svg:circle><svg:path d="M33.946 21.975C33.156 20.79 31.773 20 29.6 20h-.395a5.31 5.31 0 0 0-5.333 5.333v5.334"></svg:path></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="35" height="36" x="6.5" y="7.5" rx="4" ry="4"></svg:rect><svg:path d="M33.5 4.5v6m-19-6v6"></svg:path></svg:g>`,
})
export class ArcticonsCalendarSimple16Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
