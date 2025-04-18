import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsAlarmclockFillIcon],svg[lets-icons-alarmclock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 4L3 6m16-2l2 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16m2.78-9.875a1 1 0 1 0-1.56-1.25l-1.428 1.784l-2.237-1.491a1 1 0 1 0-1.11 1.664l2.81 1.873a1.25 1.25 0 0 0 1.67-.26z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsAlarmclockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
