import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelCheckBoxSolidIcon],svg[pixel-check-box-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2V1H2v1H1v20h1v1h20v-1h1V2zM5 11h1v-1h1V9h1v1h1v1h1v1h2v-1h1v-1h1V9h1V8h1V7h1v1h1v1h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1H7v-1H6v-1H5z"></svg:path>`,
})
export class PixelCheckBoxSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
