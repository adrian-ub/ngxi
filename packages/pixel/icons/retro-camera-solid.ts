import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelRetroCameraSolidIcon],svg[pixel-retro-camera-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3V2H2v1H1v18h1v1h20v-1h1V3zM3 4h6v1H3zm14 13h-1v2h-2v1h-4v-1H8v-2H7v-4h1v-2h2v-1h4v1h2v2h1zm4-9H3V7h6V6h1V5h1V4h10z"></svg:path><svg:path fill="currentColor" d="M15 13v4h-1v1h-4v-1H9v-4h1v3h1v-2h2v-1h-3v-1h4v1z"></svg:path>`,
})
export class PixelRetroCameraSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
