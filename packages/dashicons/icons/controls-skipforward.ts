import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsControlsSkipforwardIcon],svg[dashicons-controls-skipforward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12.4L2 16V4l6 3.6V4l8 4.8V4h2v12h-2v-4.8L8 16z"></svg:path>`,
})
export class DashiconsControlsSkipforwardIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
