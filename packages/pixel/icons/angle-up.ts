import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelAngleUpIcon],svg[pixel-angle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v1h-1v1H9v1H8v1H7v1H6v1H5v-1H4v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h2v1h1v1h1v1h1v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelAngleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
