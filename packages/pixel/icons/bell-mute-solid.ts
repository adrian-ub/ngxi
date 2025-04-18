import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelBellMuteSolidIcon],svg[pixel-bell-mute-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2h1v1h-1zm2 1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H5v1H4v1H3v-1H2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3zm-1 14h1v1h-1v1H9v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1v5h1v2h1zM2 17h1v1H2zm3-1H4v-2h1V8h1V6h1V5h1V4h2V3h1V1h2v2h1v1h2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H5zm-2 0h1v1H3zm12 4v2h-1v1h-4v-1H9v-2z"></svg:path>`,
})
export class PixelBellMuteSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
