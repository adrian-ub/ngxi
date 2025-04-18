import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsThumbDownIcon],svg[majesticons-thumb-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M16 3H8a5 5 0 0 0-5 5v2a5 5 0 0 0 4.82 4.997l-.563 3.378a2.254 2.254 0 0 0 3.817 1.965L16 15.414V3zm2 12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3v12z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsThumbDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
