import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAlbumIcon],svg[picon-album-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4c0-4 6-4 6 0S1 8 1 4m3 1l1-1l-1-1l-1 1m5 4V0H0v8"></svg:path>`,
})
export class PiconAlbumIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
