import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelBusinessIcon],svg[pixel-business-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.505 15.503v7.002h-1v1H3.5v-1h-1v-7.002h7.002v2h6.001v-2z"></svg:path><svg:path fill="currentColor" d="M14.503 15.503h-4v1h4zm0-2h-4v1h4z"></svg:path><svg:path fill="currentColor" d="M22.505 5.5v-1h-6.002v-2h-1v-1H9.502v1h-1v2H2.5v1h-1v8.003h1v1h7.002v-2h6.001v2h7.002v-1h1V5.5zm-12.003-2h4.001v1h-4.001z"></svg:path>`,
})
export class PixelBusinessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
