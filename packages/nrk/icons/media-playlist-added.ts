import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMediaPlaylistAddedIcon],svg[nrk-media-playlist-added-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 5h8v2H2zm0 6h8v2H2zm20 6H2v2h20z" opacity=".3"></svg:path><svg:path fill-rule="evenodd" d="m22.676 5.969l-7.152 6.953L12 9.047l1.511-1.31l2.117 2.252l5.634-5.435z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class NrkMediaPlaylistAddedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
