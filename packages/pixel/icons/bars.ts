import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelBarsIcon],svg[pixel-bars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 11h22v2H1zm0 8h22v2H1zM1 3h22v2H1z"></svg:path>`,
})
export class PixelBarsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
