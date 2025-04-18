import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelPlaneSolidIcon],svg[pixel-plane-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 11v2h-1v1h-7v1h-1v2h-1v1h-1v2h-1v1h-1v1H7v-3h1v-3h1v-2H5v1H4v1H3v1H1v-3h1v-4H1V7h2v1h1v1h1v1h4V8H8V5H7V2h3v1h1v1h1v2h1v1h1v2h1v1h7v1z"></svg:path>`,
})
export class PixelPlaneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
