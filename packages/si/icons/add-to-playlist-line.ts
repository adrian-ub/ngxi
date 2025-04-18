import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siAddToPlaylistLineIcon],svg[si-add-to-playlist-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4 11h12m-1 4l2 2l4-4M4 7h12M4 15h8"></svg:path>`,
})
export class SiAddToPlaylistLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
