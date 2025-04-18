import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelLockSolidIcon],svg[pixel-lock-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12v-1h-3V5h-1V3h-1V2h-2V1h-4v1H8v1H7v2H6v6H3v1H2v10h1v1h18v-1h1V12zm-6-1H9V5h1V4h4v1h1z"></svg:path>`,
})
export class PixelLockSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
