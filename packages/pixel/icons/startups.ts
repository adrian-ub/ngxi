import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelStartupsIcon],svg[pixel-startups-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.505 1.5v5.001h-1v2h-1v1h-1v-1h-1v-1h-1.001v-1h-1v-1h-1v-1h-1v-1h1v-1h2V1.5zM11.502 13.503v2h-1v1h-1v1h-1v1.001h-1v1H5.5v-2h1v-1h1v-1h1v-1h1v-1.001z"></svg:path><svg:path fill="currentColor" d="M19.504 9.502v-1h-1v-1h-1V6.5h-1v-1h-1v-1h-1.001v1h-1v1h-1v1h-1v1h-1.001v1H4.501v1h-1v1.001h-1v1H1.5v2h4v-1h1.001v-1h1v-1h1v-1h1v1h-1v1h-1v2h1v-1h1v-1h3.002v3.001h-1v1h-1.001v1h2v-1h1v-1h1.001v1h-1v1h-1v1h-1v1h-1.001v4.002h2v-1h1v-1h1.001v-1h1v-6.002h1v-1h1v-1h1v-1h1.001v-1.001h1v-1zm-2-1v2h-1v1h-2.001v-1h-1v-2h1v-1h2v1z"></svg:path>`,
})
export class PixelStartupsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
