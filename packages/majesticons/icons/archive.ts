import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsArchiveIcon],svg[majesticons-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v1c0 .364-.097.706-.268 1H2.268A1.99 1.99 0 0 1 2 7V6zm1 4v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8H3zm7 2a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsArchiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
