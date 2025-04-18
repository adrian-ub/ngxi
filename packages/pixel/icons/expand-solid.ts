import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelExpandSolidIcon],svg[pixel-expand-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 20v3H2v-1H1v-7h3v5zM9 1v3H4v5H1V2h1V1zm14 14v7h-1v1h-7v-3h5v-5zm0-13v7h-3V4h-5V1h7v1z"></svg:path>`,
})
export class PixelExpandSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
