import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMovieOffOutlineIcon],svg[material-symbols-light-movie-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.672.482-1.144Q3.963 5 4.634 5h.174l4 4H4v8.385q0 .269.173.442t.443.173h13.192l1 1zm15.794-.812l-.41-.41V9h-8.361l-4-4h1.419l1.425 2.844l.156.156h2.919l-1.5-3h2.5l1.5 3h3l-1.5-3h1.826q.691 0 1.153.463T21 6.616V17q0 .385-.156.687t-.434.501m-.5 3.34L2.47 4.092l.714-.714l17.438 17.439zm-4.081-8.151"></svg:path>`,
})
export class MaterialSymbolsLightMovieOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
