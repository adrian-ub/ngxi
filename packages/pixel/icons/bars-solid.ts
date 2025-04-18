import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelBarsSolidIcon],svg[pixel-bars-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11h1v2h-1v1H2v-1H1v-2h1v-1h20zm0 8h1v2h-1v1H2v-1H1v-2h1v-1h20zm1-16v2h-1v1H2V5H1V3h1V2h20v1z"></svg:path>`,
})
export class PixelBarsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
