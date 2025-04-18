import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsMovieIcon],svg[bxs-movie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2m.001 6q-.002 0 0 0h-.466l-2.667-4H20zm-5.466 0l-2.667-4h2.596l2.667 4zm-2.404 0H9.535L6.869 5h2.596zM4 5h.465l2.667 4H4z"></svg:path>`,
})
export class BxsMovieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
