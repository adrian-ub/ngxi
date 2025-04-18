import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPlaylistAddCheckIcon],svg[material-symbols-light-playlist-add-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 15.5v-1h7v1zm0-4v-1h11v1zm0-4v-1h11v1zm12.85 10.808l-2.858-2.858l.708-.708l2.15 2.139l4.25-4.25l.708.719z"></svg:path>`,
})
export class MaterialSymbolsLightPlaylistAddCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
