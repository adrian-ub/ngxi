import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidPictureAlbumIcon],svg[icon-park-solid-picture-album-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSPictureAlbum0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="30" height="30" x="6" y="6" fill="#fff" stroke="#fff" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M42 12v27a3 3 0 0 1-3 3H12"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="m6 25l7.656-6.806a2 2 0 0 1 2.674.015L26 27m-4-4l4.785-3.988a2 2 0 0 1 2.48-.063L36 24"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M6 19v8m30-8v8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSPictureAlbum0)"></svg:path>`,
})
export class IconParkSolidPictureAlbumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
