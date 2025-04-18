import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsAlbumIcon],svg[zondicons-album-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h20v20H0zm10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-5a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class ZondiconsAlbumIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
