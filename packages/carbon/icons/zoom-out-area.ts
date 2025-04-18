import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonZoomOutAreaIcon],svg[carbon-zoom-out-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 19h8v2h-8z"></svg:path><svg:path fill="currentColor" d="m31 29.586l-4.688-4.688a8.028 8.028 0 1 0-1.415 1.414L29.586 31zM20 26a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6M4 8H2V4a2 2 0 0 1 2-2h4v2H4zm22 0h-2V4h-4V2h4a2 2 0 0 1 2 2zM12 2h4v2h-4zM8 26H4a2 2 0 0 1-2-2v-4h2v4h4zM2 12h2v4H2z"></svg:path>`,
})
export class CarbonZoomOutAreaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
