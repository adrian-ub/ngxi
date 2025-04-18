import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelBulletListIcon],svg[pixel-bullet-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h3v3H2zm0 6h3v3H2zm0 6h3v3H2zm6 1h14v1H8zM8 6h14v1H8zm0 6h14v1H8z"></svg:path>`,
})
export class PixelBulletListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
