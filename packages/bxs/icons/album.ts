import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsAlbumIcon],svg[bxs-album-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m-4.607 8.055A5 5 0 0 0 7 12H5a6.98 6.98 0 0 1 2.051-4.95a7 7 0 0 1 2.225-1.5l.779 1.842c-.596.252-1.13.612-1.59 1.072s-.82.995-1.072 1.591m4.6 3.945a2.007 2.007 0 1 1 0-4.014a2.007 2.007 0 0 1 0 4.014"></svg:path>`,
})
export class BxsAlbumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
