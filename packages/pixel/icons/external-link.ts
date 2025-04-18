import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelExternalLinkIcon],svg[pixel-external-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15v7h-1v1H2v-1H1V5h1V4h9v2H3v15h15v-6z"></svg:path><svg:path fill="currentColor" d="M23 1v8h-2V5h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H7v-2h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h-4V1z"></svg:path>`,
})
export class PixelExternalLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
