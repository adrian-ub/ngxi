import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsMoviePlayIcon],svg[bxs-movie-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2m.001 6q-.002 0 0 0h-.465l-2.667-4H20zM15.5 15L10 18v-6zm-.964-6l-2.667-4h2.596l2.667 4zm-2.404 0H9.536L6.869 5h2.596zM4 5h.465l2.667 4H4z"></svg:path>`,
})
export class BxsMoviePlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
