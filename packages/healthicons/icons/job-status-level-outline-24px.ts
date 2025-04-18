import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsJobStatusLevelOutline24pxIcon],svg[healthicons-job-status-level-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5a2 2 0 1 1-3.999.001A2 2 0 0 1 14 5m-1.25 7.5v2.75H18c.69 0 1.25.56 1.25 1.25v1.7a1.5 1.5 0 1 1-1.5 0v-1.45h-5v1.45a1.5 1.5 0 1 1-1.5 0v-1.45h-5v1.45a1.5 1.5 0 1 1-1.5 0v-1.7c0-.69.56-1.25 1.25-1.25h5.25V12.5zM12 8c-1.335 0-4 .674-4 1.778v1.333h8V9.778C16 8.674 13.335 8 12 8"></svg:path>`,
})
export class HealthiconsJobStatusLevelOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
