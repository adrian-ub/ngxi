import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxPhotoAlbumIcon],svg[bx-photo-album-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.024 11.536L10 10l-2 3h9l-3.5-5z"></svg:path><svg:circle cx="9.503" cy="7.497" r="1.503" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2m0 14H5V5c0-.806.55-.988 1-1h13z"></svg:path>`,
})
export class BxPhotoAlbumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
