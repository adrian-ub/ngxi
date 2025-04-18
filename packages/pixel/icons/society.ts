import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelSocietyIcon],svg[pixel-society-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.502 9.502h-1v1h1zm4.001 0h-1v1h1z"></svg:path><svg:path fill="currentColor" d="M22.505 9.502v-2h-1V5.5h-1v-1h-1v-1h-2.001v-1h-2v-1H9.501v1h-2v1H5.5v1h-1v1h-1v2.001h-1v2h-1v6.002h1v2h1v2.001h1v1h1v1h2.001v1h2v1.001h6.002v-1h2v-1h2.001v-1h1v-1h1v-2.001h1v-2h1.001V9.501zm-2 6.001h-5.002v1h1v2H9.502v-2h1v-1H5.501v-2h1v-1h2v-1h-1v-1.001h-1v-3h1v-1h3.001v1h1v2h3.001v-2h1v-1h3v1h1.001v3h-1v1h-1v1h2v1h1z"></svg:path><svg:path fill="currentColor" d="M12.503 14.503v1h-2v-2h1v1zm3-1v2h-2v-1h1v-1zm1-3.001h-1v3h1zm-6.001 0h-1v3h1z"></svg:path>`,
})
export class PixelSocietyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
