import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsCompassIcon],svg[majesticons-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm5.191 6.074a1 1 0 0 0-1.265-1.265L9.562 8.93a1 1 0 0 0-.632.632l-2.121 6.364a1 1 0 0 0 1.265 1.265l6.364-2.121a1 1 0 0 0 .632-.633l2.121-6.363zM12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsCompassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
