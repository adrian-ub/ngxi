import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMovieIcon],svg[pixelarticons-movie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v18H3zm2 2v2h2V5zm4 0v6h6V5zm8 0v2h2V5zm2 4h-2v2h2zm0 4h-2v2h2zm0 4h-2v2h2zm-4 2v-6H9v6zm-8 0v-2H5v2zm-2-4h2v-2H5zm0-4h2V9H5z"></svg:path>`,
})
export class PixelarticonsMovieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
