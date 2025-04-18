import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGooglePlayStoreOutlineIcon],svg[teenyicons-google-play-store-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.5.5l.252-.432A.5.5 0 0 0 1 .5zm0 14H1a.5.5 0 0 0 .752.432zm12-7l.252.432a.5.5 0 0 0 0-.864zM1 .5v14h1V.5zm.752 14.432l12-7l-.504-.864l-12 7zm12-7.864l-12-7l-.504.864l12 7zM1.829 12.876l8-7l-.658-.752l-8 7zm-.658-10l8 7l.658-.752l-8-7z"></svg:path>`,
})
export class TeenyiconsGooglePlayStoreOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
