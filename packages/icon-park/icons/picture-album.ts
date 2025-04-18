import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPictureAlbumIcon],svg[icon-park-picture-album-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="30" height="30" x="6" y="6" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M42 12V39C42 40.6569 40.6569 42 39 42H12"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M6 25L13.6562 18.1944C14.4204 17.5152 15.5738 17.5216 16.3303 18.2094L26 27"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M22 23L26.7849 19.0125C27.4971 18.4191 28.5237 18.3928 29.2653 18.949L36 24"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 19L6 27"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M36 19V27"></svg:path></svg:g>`,
})
export class IconParkPictureAlbumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
