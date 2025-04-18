import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPauseCircle16FilledIcon],svg[fluent-pause-circle-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1M6.5 11.5A.5.5 0 0 0 7 11V5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 .5.5M9 11a.5.5 0 0 0 1 0V5a.5.5 0 0 0-1 0z"></svg:path>`,
})
export class FluentPauseCircle16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
