import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSpeakerBox16FilledIcon],svg[fluent-speaker-box-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3.5A2.5 2.5 0 0 1 5.5 1h5A2.5 2.5 0 0 1 13 3.5v9a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 12.5zM9 5a1 1 0 1 0-2 0a1 1 0 0 0 2 0m-2.5 5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0M8 7.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5"></svg:path>`,
})
export class FluentSpeakerBox16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
