import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMovieOffOutlineSharpIcon],svg[material-symbols-light-movie-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h1.808l4 4H4v9h13.808l1 1zm18-.644l-1-1V9h-8.361l-4-4h1.419l1.425 2.844l.156.156h2.919l-1.5-3h2.5l1.5 3h3l-1.5-3H21zm-1.09 3.173L2.47 4.09l.714-.714l17.438 17.439zm-4.081-8.152"></svg:path>`,
})
export class MaterialSymbolsLightMovieOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
