import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelTrashAltIcon],svg[pixel-trash-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5V4h-1V3h-1V2h-1V1H9v1H8v1H7v1H6v1H2v2h2v15h1v1h14v-2h1V7h1V5zM8 4h1V3h6v1h1v1H8zm10 17H6V7h12z"></svg:path><svg:path fill="currentColor" d="M8 9h2v10H8zm6 0h2v10h-2z"></svg:path>`,
})
export class PixelTrashAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
