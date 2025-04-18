import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMediaPlaylistAddLaterIcon],svg[nrk-media-playlist-add-later-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 19h9v-2h-9zm-3-6h12v-2H10zm12-6H8V5h14z" opacity=".3"></svg:path><svg:path d="M2 5h2v12h3.216L6.13 15H8.5l1.63 3l-1.63 3H6.13l1.086-2H2z"></svg:path></svg:g>`,
})
export class NrkMediaPlaylistAddLaterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
