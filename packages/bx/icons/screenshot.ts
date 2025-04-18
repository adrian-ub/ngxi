import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxScreenshotIcon],svg[bx-screenshot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 19h3v-2H5v-2H3v3a1 1 0 0 0 1 1M19 4a1 1 0 0 0-1-1h-3v2h2v2h2zM5 5h2V3H4a1 1 0 0 0-1 1v3h2zM3 9h2v4H3zm14 0h2v3h-2zM9 3h4v2H9zm0 14h3v2H9z"></svg:path>`,
})
export class BxScreenshotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
