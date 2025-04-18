import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelBloombergIcon],svg[pixel-bloomberg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2V1H2v1H1v20h1v1h20v-1h1V2zM7 5h7v1h1v1h1v4h-1v1h1v1h1v4h-1v1h-1v1H7z"></svg:path><svg:path fill="currentColor" d="M15 14v2h-1v1H9v-4h5v1zm-1-6v2h-1v1H9V7h4v1z"></svg:path>`,
})
export class PixelBloombergIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
