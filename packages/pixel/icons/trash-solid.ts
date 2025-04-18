import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelTrashSolidIcon],svg[pixel-trash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6v8h-1v8h-1v1H6v-1H5v-8H4V6zm1-3v2H3V3h1V2h5V1h6v1h5v1z"></svg:path>`,
})
export class PixelTrashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
