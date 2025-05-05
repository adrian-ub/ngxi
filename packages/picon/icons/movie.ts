import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMovieIcon],svg[picon-movie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4V2l8-2v2M0 8V4h8v4"></svg:path>`,
})
export class PiconMovieIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
