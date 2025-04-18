import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBooksMoviesAndMusicOutlineSharpIcon],svg[material-symbols-books-movies-and-music-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22V6.25l12-4.8V6h2v4h-2V8H5v12h5.175l2 2zM9 6h4V4.45zm8 16q-2.075 0-3.537-1.463T12 17t1.463-3.537T17 12t3.538 1.463T22 17t-1.463 3.538T17 22m-1.25-2.5l4-2.5l-4-2.5zM5 20V8z"></svg:path>`,
})
export class MaterialSymbolsBooksMoviesAndMusicOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
