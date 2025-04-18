import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelNpmIcon],svg[pixel-npm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2V1H2v1H1v20h1v1h20v-1h1V2zM12 8v11H5V5h14v14h-3V8z"></svg:path>`,
})
export class PixelNpmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
