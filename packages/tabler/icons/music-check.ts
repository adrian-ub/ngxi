import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMusicCheckIcon],svg[tabler-music-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0-6 0m6 0V4h10v9.5M9 8h10m-4 11l2 2l4-4"></svg:path>`,
})
export class TablerMusicCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
