import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMovieOffIcon],svg[material-symbols-movie-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4l16 16zm17.775-1.1L6.85 4H8.5l1.675 3.325l.675.675h2.65l-2-4H14l2 4h3l-2-4h3q.825 0 1.413.588T22 6v12q0 .25-.05.475t-.175.425m-2 3.725l-18.4-18.4L2.8 2.8l18.4 18.4z"></svg:path>`,
})
export class MaterialSymbolsMovieOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
