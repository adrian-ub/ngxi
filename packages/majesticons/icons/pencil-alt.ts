import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsPencilAltIcon],svg[majesticons-pencil-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M19.414 3a2 2 0 0 0-2.828 0l-8 8A2 2 0 0 0 8 12.414V14a2 2 0 0 0 2 2h1.586A2 2 0 0 0 13 15.414l8-8a2 2 0 0 0 0-2.828L19.414 3zM6 4a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-3a1 1 0 1 0-2 0v3a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 1 0 0-2H6z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsPencilAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
