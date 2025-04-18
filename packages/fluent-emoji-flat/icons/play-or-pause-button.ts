import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatPlayOrPauseButtonIcon],svg[fluent-emoji-flat-play-or-pause-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="28" height="28" x="2" y="2" fill="#00A6ED" rx="4"></svg:rect><svg:path fill="#fff" d="M15.343 15.31a1 1 0 0 1 0 1.38l-5.869 6.16c-.623.654-1.724.213-1.724-.69V9.84c0-.903 1.101-1.344 1.724-.69zM17 9.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4.5-.5a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatPlayOrPauseButtonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
