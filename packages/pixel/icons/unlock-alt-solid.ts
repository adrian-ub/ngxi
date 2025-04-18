import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelUnlockAltSolidIcon],svg[pixel-unlock-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12v10h-1v1H4v-1H3V12h1v-1h1V6h1V4h1V3h1V2h2V1h4v1h2v1h1v1h1v2h1v3h-3V6h-1V5h-1V4h-4v1H9v1H8v5h12v1z"></svg:path>`,
})
export class PixelUnlockAltSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
