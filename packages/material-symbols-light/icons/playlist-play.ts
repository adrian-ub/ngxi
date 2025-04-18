import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPlaylistPlayIcon],svg[material-symbols-light-playlist-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15.77v-1h7.02v1zm0-4v-1h10.962v1zm0-4v-1h10.962v1zM16.442 20v-5.942l4.577 2.98z"></svg:path>`,
})
export class MaterialSymbolsLightPlaylistPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
