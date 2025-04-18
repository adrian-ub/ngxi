import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCalendarJumpToDateIcon],svg[streamline-calendar-jump-to-date-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2a1 1 0 0 0-1 1v9.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-2M3.5.5v3m7-3v3M3.5 2h5M4.419 8.224H9.58"></svg:path><svg:path d="m7.642 10.164l1.94-1.94l-1.94-1.94"></svg:path></svg:g>`,
})
export class StreamlineCalendarJumpToDateIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
