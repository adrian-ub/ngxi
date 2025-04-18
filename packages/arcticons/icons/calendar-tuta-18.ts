import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalendarTuta18Icon],svg[arcticons-calendar-tuta-18-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.885 22.78l4.205-1.98m0 0l-4.403 14.4M29.891 28h-2.34c-1.98 0-4.095 1.62-4.7 3.6h0c-.605 1.98.52 3.6 2.5 3.6h2.34c1.98 0 4.095-1.62 4.7-3.6h0c.605-1.98-.52-3.6-2.5-3.6m0 0c1.98 0 4.096-1.62 4.701-3.6h0c.605-1.98-.52-3.6-2.5-3.6h-2.34c-1.98 0-4.095 1.62-4.7 3.6h0c-.605 1.98.52 3.6 2.5 3.6"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 42.27h28.377L42.5 13.893H14.123zm37-28.428H14.123L5.5 5.73h28.377zM5.5 42.27V5.73"></svg:path>`,
})
export class ArcticonsCalendarTuta18Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
