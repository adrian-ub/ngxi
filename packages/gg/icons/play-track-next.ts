import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPlayTrackNextIcon],svg[gg-play-track-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 17l8-5l-8-5zM18 7h-3v10h3z"></svg:path>`,
})
export class GgPlayTrackNextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
