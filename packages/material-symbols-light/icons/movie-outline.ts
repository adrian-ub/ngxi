import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMovieOutlineIcon],svg[material-symbols-light-movie-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.616 5l1.5 3h3l-1.5-3h2l1.5 3h3l-1.5-3h2l1.5 3h3l-1.5-3h1.769q.69 0 1.153.463T21 6.616v10.769q0 .69-.462 1.153T19.385 19H4.615q-.69 0-1.152-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5M4 9v8.385q0 .269.173.442t.443.173h14.769q.269 0 .442-.173t.173-.442V9zm0 0v9z"></svg:path>`,
})
export class MaterialSymbolsLightMovieOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
