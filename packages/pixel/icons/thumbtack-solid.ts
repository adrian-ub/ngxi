import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelThumbtackSolidIcon],svg[pixel-thumbtack-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13v2h-1v1h-5v7h-2v-7H6v-1H5v-2h1v-1h1v-1h1V4H6V2h1V1h10v1h1v2h-2v7h1v1h1v1z"></svg:path>`,
})
export class PixelThumbtackSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
