import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMovieEditSharpIcon],svg[material-symbols-light-movie-edit-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h1.616l1.5 3h3l-1.5-3h2l1.5 3h3l-1.5-3h2l1.5 3h3l-1.5-3h1.769q.69 0 1.153.463T21 6.616v1.08l-9.154 9.096V19zm11.23 1v-2.21l5.96-5.934l2.19 2.204L16.44 20zm5.96-4.985l.925-.956l-.924-.943l-.95.95z"></svg:path>`,
})
export class MaterialSymbolsLightMovieEditSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
