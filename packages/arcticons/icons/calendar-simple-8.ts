import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalendarSimple8Icon],svg[arcticons-calendar-simple-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.3 28h-2.6c-2.2 0-4 1.8-4 4h0c0 2.2 1.8 4 4 4h2.6c2.2 0 4-1.8 4-4h0c0-2.2-1.8-4-4-4m0 0c2.2 0 4-1.8 4-4h0c0-2.2-1.8-4-4-4h-2.6c-2.2 0-4 1.8-4 4h0c0 2.2 1.8 4 4 4"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="35" height="36" x="6.5" y="7.5" rx="4" ry="4"></svg:rect><svg:path d="M33.5 4.5v6m-19-6v6"></svg:path></svg:g>`,
})
export class ArcticonsCalendarSimple8Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
