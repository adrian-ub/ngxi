import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsNewspaperIcon],svg[majesticons-newspaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M5 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14c.493 0 1.211-.14 1.834-.588C21.51 19.925 22 19.125 22 18v-7.002A2.999 2.999 0 0 0 19 8v7.5a.5.5 0 0 1-1 0V6a3 3 0 0 0-3-3H5zm2 4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H7zm0 8a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H7z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsNewspaperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
