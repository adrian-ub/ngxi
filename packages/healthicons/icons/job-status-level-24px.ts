import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsJobStatusLevel24pxIcon],svg[healthicons-job-status-level-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7a2 2 0 1 0 .001-3.999A2 2 0 0 0 12 7m.75 5.5h-1.5v2.75H6c-.69 0-1.25.56-1.25 1.25v1.7a1.5 1.5 0 1 0 1.5 0v-1.45h5v1.45a1.5 1.5 0 1 0 1.5 0v-1.45h5v1.45a1.5 1.5 0 1 0 1.5 0v-1.7c0-.69-.56-1.25-1.25-1.25h-5.25zM8 9.778C8 8.674 10.665 8 12 8s4 .674 4 1.778v1.333H8z"></svg:path>`,
})
export class HealthiconsJobStatusLevel24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
