import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonMusicArtistLightIcon],svg[iconamoon-music-artist-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="7" r="3"></svg:circle><svg:circle cx="18" cy="18" r="2" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12.341 20H6a2 2 0 0 1-2-2a4 4 0 0 1 4-4h5.528M20 18v-7l2 2"></svg:path></svg:g>`,
})
export class IconamoonMusicArtistLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
