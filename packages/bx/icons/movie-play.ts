import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxMoviePlayIcon],svg[bx-movie-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2m.001 6q-.002 0 0 0h-.465l-2.667-4H20zM9.536 9L6.869 5h2.596l2.667 4zm5 0l-2.667-4h2.596l2.667 4zM4 5h.465l2.667 4H4zm0 14v-8h16l.002 8z"></svg:path><svg:path fill="currentColor" d="m10 18l5.5-3l-5.5-3z"></svg:path>`,
})
export class BxMoviePlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
