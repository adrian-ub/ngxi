import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxAlbumIcon],svg[bx-album-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="11.99" cy="11.99" r="2.01" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path><svg:path fill="currentColor" d="M12 6a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4z"></svg:path>`,
})
export class BxAlbumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
