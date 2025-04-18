import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsPlaylistIcon],svg[majesticons-playlist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 6h-6m6 4h-6m6 4h-8m8 4H4"></svg:path><svg:path fill="currentColor" d="M8 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 0V7m0 0h2V6H8z"></svg:path></svg:g>`,
})
export class MajesticonsPlaylistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
