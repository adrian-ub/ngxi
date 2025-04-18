import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelGamingIcon],svg[pixel-gaming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.503 13.502H9.502v2h6.001z"></svg:path><svg:path fill="currentColor" d="M22.505 10.501v-2h-1v-2h-1v-1h-1V4.5h-4.002v1H9.502v-1H5.5v1h-1v1h-1v2h-1v2.001h-1v8.002h1v1h3v-1h1.001v-1h1v-1h1v-3.001h1v-1h6.002v1h1v3h1v1.001h1v1h1.001v1h3v-1h1.001v-8.002zm-17.004-2v-1h1v-1h1v1h1v1h1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1zm8.002 1h-1v1h-1v-1h-1.001v-1h1v-1h1v1h1zm7.001 1h-2v2h-2v-2h-2.001v-2h2v-2h2v2h2.001z"></svg:path><svg:path fill="currentColor" d="M18.504 8.501h-2v2h2z"></svg:path>`,
})
export class PixelGamingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
