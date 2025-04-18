import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelUnlockSolidIcon],svg[pixel-unlock-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12v10h-1v1H3v-1H2V12h1v-1h3V5h1V3h1V2h2V1h4v1h2v1h1v2h1v4h-3V5h-1V4h-4v1H9v6h12v1z"></svg:path>`,
})
export class PixelUnlockSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
