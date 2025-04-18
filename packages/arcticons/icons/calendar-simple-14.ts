import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalendarSimple14Icon],svg[arcticons-calendar-simple-14-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.28 22.2l4-2.2m0 0v16m14.225 0V20l-8.6 10.8h10.6"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="35" height="36" x="6.5" y="7.5" rx="4" ry="4"></svg:rect><svg:path d="M33.5 4.5v6m-19-6v6"></svg:path></svg:g>`,
})
export class ArcticonsCalendarSimple14Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
