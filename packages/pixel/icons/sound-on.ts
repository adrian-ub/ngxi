import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelSoundOnIcon],svg[pixel-sound-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 15v-1h-1v-1h1v-2h-1v-1h1V9h1v1h1v4h-1v1z"></svg:path><svg:path fill="currentColor" d="M23 10v4h-1v2h-1v1h-1v1h-1v-1h-1v-1h1v-1h1v-1h1v-4h-1V9h-1V8h-1V7h1V6h1v1h1v1h1v2zM11 2v1h-1v1H9v1H8v1H7v1H6v1H1v8h5v1h1v1h1v1h1v1h1v1h1v1h3V2zm1 17h-1v-1h-1v-1H9v-1H8v-1H7v-1H3v-4h4V9h1V8h1V7h1V6h1V5h1z"></svg:path>`,
})
export class PixelSoundOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
