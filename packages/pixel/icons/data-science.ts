import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelDataScienceIcon],svg[pixel-data-science-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.505 22.505v1h-3v-1h1v-1h1v1zm-4.001 0v1h-3v-1h1v-1h1v1zm-4.001 0v1h-2v-2h1v1zm-4.001-1.001v2h-2v-1h1v-1zm-3 1.001v1H5.5v-1h1v-1h1v1zm-4.002 0v1h-3v-1h1v-1h1v1zm18.005-5.002v3.001h-1v-2h-3.001v2h-1v-2h-3.001v2h-1v-2h-2v2h-1v-2H7.5v2h-1v-2h-3v2h-1v-3zm-3.001-6.001v1h-1v1H6.5v-1h-1v-1h-1v3.001h1v1h1v1h12.003v-1h1v-1h1v-3zM9.502 15.503v-1h6.001v1z"></svg:path><svg:path fill="currentColor" d="M19.504 7.501v1h-1v1H6.5v-1h-1v-1h-1v3.001h1v1h1v1h12.003v-1h1v-1h1v-3zM9.502 11.502v-1h6.001v1z"></svg:path><svg:path fill="currentColor" d="M19.504 3.5v-1h-1v-1H6.5v1h-1v1h-1v3.001h1v1h1v1h12.003v-1h1v-1h1v-3zm-12.003 0v1h10.003v-1h1v1h-1v1H7.5v-1h-1v-1zm2 4.001v-1h6.002v1z"></svg:path>`,
})
export class PixelDataScienceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
