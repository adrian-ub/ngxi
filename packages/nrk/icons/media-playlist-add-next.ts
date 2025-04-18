import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMediaPlaylistAddNextIcon],svg[nrk-media-playlist-add-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 5h9v2h-9zm-2 6h11v2H11zm11 6H8v2h14z" opacity=".3"></svg:path><svg:path d="M8.5 3H6.13l1.086 2H2v14h2V7h3.216L6.13 9H8.5l1.63-3z"></svg:path></svg:g>`,
})
export class NrkMediaPlaylistAddNextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
