import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPlaylistMinimalistic2LinearIcon],svg[solar-playlist-minimalistic-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M15 6H3m10 4H3m6 4H3m5 4H3m14-1.5V8"></svg:path><svg:circle cx="14.5" cy="16.5" r="2.5"></svg:circle><svg:path stroke-linecap="round" d="M21 12a4 4 0 0 1-4-4"></svg:path></svg:g>`,
})
export class SolarPlaylistMinimalistic2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
