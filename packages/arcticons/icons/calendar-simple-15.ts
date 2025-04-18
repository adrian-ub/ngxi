import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalendarSimple15Icon],svg[arcticons-calendar-simple-15-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.28 22.2l4-2.2m0 0v16m6.025-1.35c1.104.926 2.176 1.35 4.854 1.35h.46a4.485 4.485 0 0 0 4.486-4.485h0a4.486 4.486 0 0 0-4.486-4.486h-5.314V20h9.8"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="35" height="36" x="6.5" y="7.5" rx="4" ry="4"></svg:rect><svg:path d="M33.5 4.5v6m-19-6v6"></svg:path></svg:g>`,
})
export class ArcticonsCalendarSimple15Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
