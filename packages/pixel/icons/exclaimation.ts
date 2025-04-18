import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelExclaimationIcon],svg[pixel-exclaimation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9h-1V1h4v8h-1v6h-2zm4 10v1h-1v1h-1v1h-2v-1h-1v-1H9v-1h1v-1h1v-1h2v1h1v1z"></svg:path>`,
})
export class PixelExclaimationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
