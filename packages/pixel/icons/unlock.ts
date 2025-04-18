import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelUnlockIcon],svg[pixel-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12v-1H8V5h1V4h1V3h4v1h1v1h1v4h2V5h-1V3h-1V2h-2V1h-4v1H8v1H7v2H6v6H3v1H2v10h1v1h18v-1h1V12zm-1 9H4v-8h16z"></svg:path>`,
})
export class PixelUnlockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
