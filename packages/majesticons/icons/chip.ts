import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsChipIcon],svg[majesticons-chip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M10 3a1 1 0 0 0-2 0v1H7a3 3 0 0 0-3 3v1H3a1 1 0 0 0 0 2h1v4H3a1 1 0 1 0 0 2h1v1a3 3 0 0 0 3 3h1v1a1 1 0 1 0 2 0v-1h4v1a1 1 0 1 0 2 0v-1h1a3 3 0 0 0 3-3v-1h1a1 1 0 1 0 0-2h-1v-4h1a1 1 0 1 0 0-2h-1V7a3 3 0 0 0-3-3h-1V3a1 1 0 1 0-2 0v1h-4V3zm-.25 6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75h-4.5zM12 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsChipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
