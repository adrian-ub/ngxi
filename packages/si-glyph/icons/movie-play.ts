import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphMoviePlayIcon],svg[si-glyph-movie-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M1 15h15l-.083-14H1zM11 2h1v1h-1zm3 2v8H3V4zM8 2h1v1H8zM5 2h1v1H5zM2 2h1v1H2zm.979 12h-1v-1h1zM6 14H5v-1h1zm3 0H8v-1h1zm3 0h-1v-1h1zm3 0h-1v-1h1zm0-11h-1V2h1z"></svg:path><svg:path d="M7.003 9.865L7 6l3.949 2.015z"></svg:path></svg:g>`,
})
export class SiGlyphMoviePlayIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
