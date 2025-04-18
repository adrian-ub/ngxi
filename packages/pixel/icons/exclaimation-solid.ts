import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelExclaimationSolidIcon],svg[pixel-exclaimation-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 18v3h-1v1h-1v1h-4v-1H9v-1H8v-3h1v-1h1v-1h4v1h1v1zM10 8H9V1h6v7h-1v6h-4z"></svg:path>`,
})
export class PixelExclaimationSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
