import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastPlayOrPauseButtonIcon],svg[fluent-emoji-high-contrast-play-or-pause-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.343 16.69a1 1 0 0 0 0-1.38L9.474 9.15c-.623-.654-1.724-.213-1.724.69v12.32c0 .903 1.101 1.344 1.724.69zM17 9.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4.5-.5a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5z"></svg:path><svg:path d="M6 1a5 5 0 0 0-5 5v20a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5zM3 6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastPlayOrPauseButtonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
