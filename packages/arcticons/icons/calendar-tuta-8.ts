import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalendarTuta8Icon],svg[arcticons-calendar-tuta-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.195 28h-2.34c-1.98 0-4.095 1.62-4.7 3.6h0c-.606 1.98.519 3.6 2.499 3.6h2.34c1.98 0 4.095-1.62 4.7-3.6h0c.606-1.98-.52-3.6-2.5-3.6m.001 0c1.98 0 4.095-1.62 4.7-3.6h0c.606-1.98-.519-3.6-2.499-3.6h-2.34c-1.98 0-4.095 1.62-4.7 3.6h0c-.606 1.98.519 3.6 2.499 3.6"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 42.27h28.377L42.5 13.893H14.123zm37-28.428H14.123L5.5 5.73h28.377zM5.5 42.27V5.73"></svg:path>`,
})
export class ArcticonsCalendarTuta8Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
