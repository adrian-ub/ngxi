import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsControlsPauseIcon],svg[dashicons-controls-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16V4h3v12zm7-12h3v12h-3z"></svg:path>`,
})
export class DashiconsControlsPauseIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
