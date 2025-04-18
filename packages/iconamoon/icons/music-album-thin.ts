import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonMusicAlbumThinIcon],svg[iconamoon-music-album-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:circle cx="18" cy="9" r="2"></svg:circle><svg:path d="M15.318 3.631a9 9 0 1 0 5.368 10.736M20 9V2l2 2"></svg:path></svg:g>`,
})
export class IconamoonMusicAlbumThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
