import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMusicSearchIcon],svg[tabler-music-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0-6 0m6 0V4h10v7M9 8h10m-4 10a3 3 0 1 0 6 0a3 3 0 1 0-6 0m5.2 2.2L22 22"></svg:path>`,
})
export class TablerMusicSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
