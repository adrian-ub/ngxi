import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatHeartDecorationIcon],svg[fluent-emoji-flat-heart-decoration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#8D65C5" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#F4F4F4" d="M19.24 9.05c-1.83.32-3.24 2.49-3.24 2.49s-1.41-2.16-3.24-2.48c-4.53-.8-6.4 3.18-5.65 6.13C8.46 20.45 16 25.05 16 25.05s7.54-4.6 8.89-9.87c.76-2.95-1.11-6.92-5.65-6.13"></svg:path></svg:g>`,
})
export class FluentEmojiFlatHeartDecorationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
