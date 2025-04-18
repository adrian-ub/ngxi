import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelBoldSolidIcon],svg[pixel-bold-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13v-1h-2v-1h1v-1h1V4h-1V3h-1V2h-1V1H5v1H4v20h1v1h12v-1h1v-1h1v-1h1v-7zm-3 6v1H7v-7h9v1h1v5zm0-14v4h-1v1H7V4h8v1z"></svg:path><svg:path fill="none" d="M0 0h24v24H0z"></svg:path>`,
})
export class PixelBoldSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
