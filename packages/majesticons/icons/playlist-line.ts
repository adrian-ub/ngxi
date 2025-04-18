import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsPlaylistLineIcon],svg[majesticons-playlist-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 6h-6m6 4h-6m6 4h-8m8 4H4m4-6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 0V7m0 0h2V6H8z"></svg:path>`,
})
export class MajesticonsPlaylistLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
