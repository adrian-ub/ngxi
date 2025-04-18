import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonPlaylistLightIcon],svg[iconamoon-playlist-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6 6L3 7.732V4.268z"></svg:path><svg:path stroke-linecap="round" d="M3 12h18M10 6h11M3 18h18"></svg:path></svg:g>`,
})
export class IconamoonPlaylistLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
