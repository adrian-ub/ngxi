import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPlayPauseIcon],svg[gg-play-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7H8v10h3zm2 10h3V7h-3z"></svg:path>`,
})
export class GgPlayPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
