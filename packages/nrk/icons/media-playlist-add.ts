import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMediaPlaylistAddIcon],svg[nrk-media-playlist-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17 4v4h-4v2h4v4h2v-4h4V8h-4V4z"></svg:path><svg:path d="M1 5h10v2H1zm0 6h10v2H1zm20 6H1v2h20z" opacity=".3"></svg:path></svg:g>`,
})
export class NrkMediaPlaylistAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
