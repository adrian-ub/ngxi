import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelRemoteIcon],svg[pixel-remote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.503 16.503h-2v1h2zm3 1v2H8.502v-2h3v1h2v-1zm1.001-4v3h-3.001v-1h-4.001v1h-3v-3zm-4.001-2.001h-2v1h2zM7.501 3.5v2h-1v1.001h-1v1h-1v-4z"></svg:path><svg:path fill="currentColor" d="M22.505 11.502v-1h-1v-1h-1v-1h-1v-1h-1.001v-1h-1V5.5h-1v-1h-1v-1h-1.001v-1h-1v-1h-2v1h-1.001v1h-1v1h-1v1h-1v1.001h-1v1H5.5v1h-1v1h-1v1.001h-1v1h-1v1h3v11.003h16.004V12.503h3.001v-1zm-4.001 6.002h-1v2h-1v1H8.501v-1h-1v-2h-1v-4.001h1v-1h3v-2.001h4.001v2h3v1h1z"></svg:path>`,
})
export class PixelRemoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
