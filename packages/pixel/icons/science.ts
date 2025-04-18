import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelScienceIcon],svg[pixel-science-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 20.504h-1v2h1zm1-2h-1v2h1zm1-2.001h-1v2h1zm1-1h-1v1h1zm1.001-1h-1v1h1zm1-1h-1v1h1zm1.001-1.001h-1v1h1zm7.001 0h-1v1h1zm1 1.001h-1v1h1zm1.001 1h-1v1h1zm1 1h-1v1h1zm1 1h-1v2h1zm1 2.001h-1v2h1zm1.001 2h-1v2h1zm-1.001 2.001H2.5v1h18.004z"></svg:path><svg:path fill="currentColor" d="M18.504 20.505v-2h-1v-2.001h-1v-1h-1v-1h-1.001v-1.001h-3v1h-1v1H6.5v1h-1v2.001h-1v2h-1v1h16.003v-1zM7.5 17.504h2v2h-2zm4.001-1h1v1h-1zM14.503 3.5h-1v9.002h1zm-5.001 0h-1v9.002h1zm6.001-1h-1v1h1zm-7.001 0h-1v1h1zm6.001-1H8.502v1h6.001z"></svg:path>`,
})
export class PixelScienceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
