import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelTrashAltSolidIcon],svg[pixel-trash-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3v2H2V3h6V2h1V1h6v1h1v1zM4 7v15h1v1h14v-2h1V7zm12 12h-2V9h2zm-6 0H8V9h2z"></svg:path>`,
})
export class PixelTrashAltSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
