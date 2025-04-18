import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsMusicAlbumFillIcon],svg[akar-icons-music-album-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 5a4 4 0 0 1 4.002-4h13.996A4 4 0 0 1 23 5v14a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4zm19 7a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-8 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path>`,
})
export class AkarIconsMusicAlbumFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
