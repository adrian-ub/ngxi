import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelSeedlingsSolidIcon],svg[pixel-seedlings-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11h1v11h-2v-7H7v-1H5v-1H4v-1H3v-2H2V8H1V5h5v1h2v1h2v1h1v1h1zm11-9v4h-1v2h-1v1h-1v1h-2v1h-2v1h-2v-2h-1V8h-1V6h1V5h1V4h2V3h2V2z"></svg:path>`,
})
export class PixelSeedlingsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
