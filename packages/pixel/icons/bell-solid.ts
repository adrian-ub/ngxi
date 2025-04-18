import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelBellSolidIcon],svg[pixel-bell-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20v2h-1v1h-4v-1H9v-2zm7-3v1h-1v1H3v-1H2v-1h1v-1h1v-2h1V8h1V6h1V5h1V4h2V3h1V1h2v2h1v1h2v1h1v1h1v2h1v6h1v2h1v1z"></svg:path>`,
})
export class PixelBellSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
