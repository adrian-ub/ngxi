import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelMediaIcon],svg[pixel-media-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.504 21.505v1h-1v1H2.5v-1h-1V6.5h1v-1h1v15.003h1v1z"></svg:path><svg:path fill="currentColor" d="M22.505 5.5v-1h-6.002v-1h-1v-1h-1v-1H6.5v1h-2v17.004h1v1h17.004v-1h1V5.501zm-7.002 7.002v1h1v1.001h1v1h1v1h1.001v1H6.501v-5h1v-1h1v-1.001h1v-1h1.001v-1h1v1h1v1h1v1h1v1zm-9.002-8h1v-1h2v1h1.001v2h-1v1h-2v-1h-1zm16.004 13.003h-1v-1h-1v-1h-1v-1.001h-1.001v-1h-1v-1h-1v-1h-1v-1.001h1v-1h1v-1h1v1h1v1h1v1h1v1h1z"></svg:path>`,
})
export class PixelMediaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
