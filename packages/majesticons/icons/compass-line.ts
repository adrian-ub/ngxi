import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsCompassLineIcon],svg[majesticons-compass-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm5.191 6.074a1 1 0 0 0-1.265-1.265L9.562 8.93a1 1 0 0 0-.632.632l-2.121 6.364a1 1 0 0 0 1.265 1.265l6.364-2.121a1 1 0 0 0 .632-.632l2.121-6.364zM9.34 14.662l1.33-3.993l3.992-1.33l-1.33 3.992l-3.992 1.33z"></svg:path></svg:g>`,
})
export class MajesticonsCompassLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
