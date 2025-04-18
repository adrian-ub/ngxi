import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphFolderSearchIcon],svg[si-glyph-folder-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M13.959 1V.043H6.043l1 .957zM4.002 8.486a3.485 3.485 0 0 0 3.49 3.48a3.485 3.485 0 0 0 3.488-3.48a3.484 3.484 0 0 0-3.488-3.479a3.485 3.485 0 0 0-3.49 3.479m6.007.014c0 1.414-1.138 2.562-2.538 2.562c-1.402 0-2.539-1.147-2.539-2.562c0-1.416 1.137-2.564 2.539-2.564c1.4 0 2.538 1.148 2.538 2.564"></svg:path><svg:path d="M3.652 0H1v1H0v12h1.016l.002 1h9.518l-1.299-1.279a4.627 4.627 0 0 1-6.4-4.263a4.625 4.625 0 0 1 4.627-4.616c2.551 0 4.629 2.07 4.629 4.616c0 .591-.123 1.151-.326 1.672L15.484 14h.42l.033-12H6z"></svg:path><svg:path d="m14.021 14.029l-.937.979l-2.582-2.541l1.019-1.041z"></svg:path></svg:g>`,
})
export class SiGlyphFolderSearchIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
