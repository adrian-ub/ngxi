import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPlayTrackPrevIcon],svg[gg-play-track-prev-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 17l-8-5l8-5zM6 7h3v10H6z"></svg:path>`,
})
export class GgPlayTrackPrevIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
