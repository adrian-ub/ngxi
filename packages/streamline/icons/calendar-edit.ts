import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCalendarEditIcon],svg[streamline-calendar-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2a1 1 0 0 0-1 1v9.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-2M3.5.5v3m7-3v3M3.5 2h5"></svg:path><svg:path d="m10 6.864l-4.132 4.132L4 11.25l.263-1.868L8.386 5.25z"></svg:path></svg:g>`,
})
export class StreamlineCalendarEditIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
