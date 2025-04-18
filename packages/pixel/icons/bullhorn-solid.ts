import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelBullhornSolidIcon],svg[pixel-bullhorn-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 10v3h-1v1h-1V9h1v1zM2 7h6v15H6v-1H5v-5H2v-1H1V8h1zm18-5v19h-1v-1h-1v-1h-2v-1h-2v-1h-2v-1h-2V7h2V6h2V5h2V4h2V3h1V2z"></svg:path>`,
})
export class PixelBullhornSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
