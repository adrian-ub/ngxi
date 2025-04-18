import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mapMovieTheaterIcon],svg[map-movie-theater-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M42.215 13h-5.674l5.709-5.474L36.602 2h-7.994l5.727 5.473L28.464 13h-6.789l5.838-5.474L21.746 2h-8.131l5.727 5.473L13.463 13H7.709l5.841-5.474L7.772 2H2v46h46V2h-5.642L48 7.504zM42 42H8v-6h34zm0-11H8v-6h34z"></svg:path>`,
})
export class MapMovieTheaterIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
