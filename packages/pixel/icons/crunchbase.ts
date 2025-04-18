import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelCrunchbaseIcon],svg[pixel-crunchbase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2V1H2v1H1v20h1v1h20v-1h1V2zM5 10h5v1h1v2H9v-1H6v3h3v-1h2v2h-1v1H5v-1H4v-5h1zm14 7h-4v-1h-1v1h-1V7h2v3h4v1h1v5h-1z"></svg:path><svg:path fill="currentColor" d="M15 12h3v3h-3z"></svg:path>`,
})
export class PixelCrunchbaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
