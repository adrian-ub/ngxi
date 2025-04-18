import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelLockOpenSolidIcon],svg[pixel-lock-open-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 6v5h-3V6h-1V5h-4v1h-1v5h3v1h1v9h-1v1H2v-1H1v-9h1v-1h9V6h1V4h1V3h2V2h4v1h2v1h1v2z"></svg:path>`,
})
export class PixelLockOpenSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
