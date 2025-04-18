import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAlarmClockIcon],svg[hugeicons-alarm-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="13" r="9"></svg:circle><svg:path d="m5 19l-2 2m16-2l2 2M19 3.57l.596-.298c.845-.423 1.162-.374 1.834.298s.72.99.298 1.834L21.43 6M5 3.57l-.596-.298c-.845-.423-1.162-.374-1.834.298s-.72.99-.298 1.834L2.57 6M12 9.5v4l2 2m-2-12V2m-2 0h4"></svg:path></svg:g>`,
})
export class HugeiconsAlarmClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
