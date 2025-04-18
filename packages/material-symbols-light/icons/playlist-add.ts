import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPlaylistAddIcon],svg[material-symbols-light-playlist-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 15.5v-1h7v1zm0-4v-1h11v1zm0-4v-1h11v1zm13 12v-4h-4v-1h4v-4h1v4h4v1h-4v4z"></svg:path>`,
})
export class MaterialSymbolsLightPlaylistAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
