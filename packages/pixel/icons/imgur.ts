import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelImgurIcon],svg[pixel-imgur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 17h1v1h-1zm0 0v-1h-2v1h-1v1h-1v1h1v1h-1v-1h-1v1H8v-1H7v-1H6v-1H5v-2H4v1H3v-1H2v-1h1v-1h1v1h1v-1h1v-1h1v-1H6v-1h1v1h1V9H7V8H6v1H5v1H4v1H3v1H1v9h1v1h1v1h8v-1h1v-1h1v-1h1v-1h1v-1h-1v-1zM3 20H2v-1h1zm0-3h1v1H3zm4 4H6v1H5v-1H4v-1h1v-1h1v1h1zm3 1H9v-1h1z"></svg:path><svg:path fill="currentColor" d="M23 3v18h-1v1h-1v1h-8v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V5H7v1H6v1H5v1H4v1H3v1H2v1H1V3h1V2h1V1h18v1h1v1z"></svg:path><svg:path fill="currentColor" d="M13 15h-1v1h-1v1h-1v1H8v-1H7v-1H6v-2h1v-1h1v-1h1v-1h1V9H9V8H8V7h1V6h9v9h-1v1h-1v-1h-1v-1h-2z"></svg:path>`,
})
export class PixelImgurIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
