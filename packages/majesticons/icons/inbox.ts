import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsInboxIcon],svg[majesticons-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M6 21a3 3 0 0 1-3-3v-3h5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2h5v3a3 3 0 0 1-3 3H6zm15-8h-5a2 2 0 0 0-2 2h-4a2 2 0 0 0-2-2H3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v7z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsInboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
