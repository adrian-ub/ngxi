import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelLockAltSolidIcon],svg[pixel-lock-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12v-1h-1V6h-1V4h-1V3h-1V2h-2V1h-4v1H8v1H7v1H6v2H5v5H4v1H3v10h1v1h16v-1h1V12zM8 6h1V5h1V4h4v1h1v1h1v5H8z"></svg:path>`,
})
export class PixelLockAltSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
