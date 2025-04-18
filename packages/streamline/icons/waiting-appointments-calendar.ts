import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWaitingAppointmentsCalendarIcon],svg[streamline-waiting-appointments-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2a1 1 0 0 0-1 1v9.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-2M3.5.5v3m7-3v3M3.5 2h5"></svg:path><svg:path d="M6.188 4.562a.5.5 0 0 0-.5.5v1.406H4.28a.5.5 0 0 0-.5.5v1.625a.5.5 0 0 0 .5.5h1.407v1.406a.5.5 0 0 0 .5.5h1.625a.5.5 0 0 0 .5-.5V9.093h1.406a.5.5 0 0 0 .5-.5V6.968a.5.5 0 0 0-.5-.5H8.313V5.062a.5.5 0 0 0-.5-.5z"></svg:path></svg:g>`,
})
export class StreamlineWaitingAppointmentsCalendarIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
