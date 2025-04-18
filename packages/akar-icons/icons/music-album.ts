import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsMusicAlbumIcon],svg[akar-icons-music-album-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 16.5V8.78a1 1 0 0 1 .757-.97l6-1.5A1 1 0 0 1 17 7.28V15"></svg:path><svg:path d="m9 11l8-2"></svg:path><svg:circle cx="7.5" cy="16.5" r="1.5"></svg:circle><svg:circle cx="15.5" cy="15.5" r="1.5"></svg:circle></svg:g>`,
})
export class AkarIconsMusicAlbumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
