import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsExitIcon],svg[dashicons-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3v2h2v10h-2v2h4V3zm0 8V9H5.4l4.3-4.3l-1.4-1.4L1.6 10l6.7 6.7l1.4-1.4L5.4 11z"></svg:path>`,
})
export class DashiconsExitIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
