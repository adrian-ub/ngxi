import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVideoPlayPause20FilledIcon],svg[fluent-video-play-pause-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 5A1.5 1.5 0 0 0 10 6.5v7a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 12.5 5zm5 0A1.5 1.5 0 0 0 15 6.5v7a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 17.5 5zm-12.574.45A1.25 1.25 0 0 0 2 6.503V13.5a1.25 1.25 0 0 0 1.916 1.057l5.496-3.461a1.25 1.25 0 0 0 .01-2.11z"></svg:path>`,
})
export class FluentVideoPlayPause20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
