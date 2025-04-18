import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsVideoAltIcon],svg[dashicons-video-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1c0 .57.49 1 1 1h5c.55 0 1-.45 1-1m6 5l4-4v10l-4-4zm-1 4V8c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h8c.55 0 1-.45 1-1"></svg:path>`,
})
export class DashiconsVideoAltIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
