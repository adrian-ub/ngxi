import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideCalendarXIcon],svg[lucide-calendar-x-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 2v4m8-4v4"></svg:path><svg:rect width="18" height="18" x="3" y="4" rx="2"></svg:rect><svg:path d="M3 10h18m-7 4l-4 4m0-4l4 4"></svg:path></svg:g>`,
})
export class LucideCalendarXIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
