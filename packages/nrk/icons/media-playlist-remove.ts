import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMediaPlaylistRemoveIcon],svg[nrk-media-playlist-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M1 5h10v2H1zm0 6h10v2H1zm20 6H1v2h20z" opacity=".3"></svg:path><svg:path d="m22.243 6.172l-1.415-1.415L18 7.586l-2.829-2.829l-1.414 1.415L16.586 9l-2.829 2.828l1.415 1.415L18 10.414l2.828 2.829l1.415-1.415L19.414 9z"></svg:path></svg:g>`,
})
export class NrkMediaPlaylistRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
