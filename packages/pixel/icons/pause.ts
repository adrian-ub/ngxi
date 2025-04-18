import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelPauseIcon],svg[pixel-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1H2v1H1v20h1v1h7v-1h1V2H9zM8 3v18H3V3zm14-1V1h-7v1h-1v20h1v1h7v-1h1V2zm-1 1v18h-5V3z"></svg:path>`,
})
export class PixelPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
