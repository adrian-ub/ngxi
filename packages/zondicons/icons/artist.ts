import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsArtistIcon],svg[zondicons-artist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.75 8l-3.74-3.75a3.99 3.99 0 0 1 6.82-3.08A4 4 0 0 1 15.75 8m-13.9 7.3l9.2-9.19l2.83 2.83l-9.2 9.2l-2.82-2.84zm-1.4 2.83l2.11-2.12l1.42 1.42l-2.12 2.12l-1.42-1.42zM10 15l2-2v7h-2z"></svg:path>`,
})
export class ZondiconsArtistIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
