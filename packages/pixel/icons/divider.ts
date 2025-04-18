import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelDividerIcon],svg[pixel-divider-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6h18v1H3zm-2 5h22v2H1zm2 6h18v1H3z"></svg:path>`,
})
export class PixelDividerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
