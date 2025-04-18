import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsMovieIcon],svg[proicons-movie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 7.5a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3zM7 5v14M17 5v14M2.75 9.5H7m-4.25 5H7m10-5h4.25m-4.25 5h4.25"></svg:path>`,
})
export class ProiconsMovieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
