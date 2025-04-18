import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote2OutlineIcon],svg[solar-music-note-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.75 2c0 2.9 2.35 5.25 5.25 5.25a.75.75 0 0 1 0 1.5a6.74 6.74 0 0 1-5.25-2.507V18a4.75 4.75 0 1 1-1.5-3.464V2zm-1.5 16a3.25 3.25 0 1 0-6.5 0a3.25 3.25 0 0 0 6.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarMusicNote2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
