import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiOtherWatchingMovieIcon],svg[cbi-other-watching-movie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM16 23.022a7.03 7.03 0 0 1 5.919 3.22a.506.506 0 0 1-.425.78H10.506a.506.506 0 0 1-.425-.78A7.03 7.03 0 0 1 16 23.023"></svg:path>`,
})
export class CbiOtherWatchingMovieIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
