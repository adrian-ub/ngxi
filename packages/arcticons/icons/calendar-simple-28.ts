import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalendarSimple28Icon],svg[arcticons-calendar-simple-28-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.662 25.333c0-2.963 2.37-5.333 5.136-5.333s5.334 2.37 5.334 5.333c0 1.383-.593 2.766-1.58 3.753c-2.174 1.778-8.89 6.914-8.89 6.914h10.47m10.373-8h-2.6c-2.2 0-4 1.8-4 4h0c0 2.2 1.8 4 4 4h2.6c2.2 0 4-1.8 4-4h0c0-2.2-1.8-4-4-4m0 0c2.2 0 4-1.8 4-4h0c0-2.2-1.8-4-4-4h-2.6c-2.2 0-4 1.8-4 4h0c0 2.2 1.8 4 4 4"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="35" height="36" x="6.5" y="7.5" rx="4" ry="4"></svg:rect><svg:path d="M33.5 4.5v6m-19-6v6"></svg:path></svg:g>`,
})
export class ArcticonsCalendarSimple28Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
