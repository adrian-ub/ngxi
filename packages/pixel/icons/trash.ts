import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelTrashIcon],svg[pixel-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6v8h1v8h1v1h12v-1h1v-8h1V6zm14 7h-1v8H7v-8H6V8h12zm3-10v2H3V3h1V2h5V1h6v1h5v1z"></svg:path>`,
})
export class PixelTrashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
