import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelPencilSolidIcon],svg[pixel-pencil-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20h1v1H8v1H7v1H1v-6h1v-1h1v-1h1v1h1v1h1v1h1v1h1zm9-10h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1H9v-1H8v-1H7v-1H6v-1H5v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h2v1h1v1h1v1h1zm6-6v3h-1v1h-1v1h-2V8h-1V7h-1V6h-1V5h-1V3h1V2h1V1h3v1h1v1h1v1z"></svg:path>`,
})
export class PixelPencilSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
