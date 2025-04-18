import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsFilmLineIcon],svg[majesticons-film-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6zm3-1a1 1 0 0 0-1 1v1h2V5H6zm3 0v6h6V5H9zm8 0v2h2V6a1 1 0 0 0-1-1h-1zm2 4h-2v2h2V9zm0 4h-2v2h2v-2zm0 4h-2v2h1a1 1 0 0 0 1-1v-1zm-4 2v-6H9v6h6zm-8 0v-2H5v1a1 1 0 0 0 1 1h1zm-2-4h2v-2H5v2zm0-4h2V9H5v2z"></svg:path></svg:g>`,
})
export class MajesticonsFilmLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
