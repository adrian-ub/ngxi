import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelPageBreakIcon],svg[pixel-page-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8V1h2v5h14V1h2v7zm-2 3h5v2H1zm9 0h4v2h-4zm11 5v7h-2v-5H5v5H3v-7zm-3-5h5v2h-5z"></svg:path>`,
})
export class PixelPageBreakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
