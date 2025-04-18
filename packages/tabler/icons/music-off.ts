import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMusicOffIcon],svg[tabler-music-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 17a3 3 0 1 0 6 0a3 3 0 1 0-6 0m11.42-2.55a3 3 0 1 0 4.138 4.119M9 17V9m0-4V4h10v11m-7-7h7M3 3l18 18"></svg:path>`,
})
export class TablerMusicOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
