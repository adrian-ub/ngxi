import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMediaPlaylistIcon],svg[nrk-media-playlist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 11h10v2H12zm10 6H2v2h20zM12 5h10v2H12z" opacity=".3"></svg:path><svg:path d="M3.002 4h3.232l2.75 5l-2.75 5H3.002l2.75-5z"></svg:path></svg:g>`,
})
export class NrkMediaPlaylistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
