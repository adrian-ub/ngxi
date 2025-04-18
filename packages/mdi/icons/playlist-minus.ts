import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPlaylistMinusIcon],svg[mdi-playlist-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16h7v-2H3m9 0v2h10v-2m-8-8H3v2h11m0 2H3v2h11z"></svg:path>`,
})
export class MdiPlaylistMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
