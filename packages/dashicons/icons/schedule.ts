import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsScheduleIcon],svg[dashicons-schedule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h16v4H2zm0 10V8h4v4zm6-2V8h4v2zm6 3V8h4v5zm-6 5v-6h4v6zm-6 0v-4h4v4zm12 0v-3h4v3z"></svg:path>`,
})
export class DashiconsScheduleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
