import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelImageSolidIcon],svg[pixel-image-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 20v2h-1v1H2v-1H1v-7h1v1h1v1h1v1h1v1h1v1h1v1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v1h1v1h1v1h1v1h1v1h1v1h1v1z"></svg:path><svg:path fill="currentColor" d="M22 2V1H2v1H1v10h1v1h1v1h1v1h1v1h1v1h1v1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1V2zM9 6v3H8v1H5V9H4V6h1V5h3v1z"></svg:path><svg:path fill="none" d="M0 0h24v24H0z"></svg:path>`,
})
export class PixelImageSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
