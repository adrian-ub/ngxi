import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPauseCircle16RegularIcon],svg[fluent-pause-circle-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 14A6 6 0 1 1 8 2a6 6 0 0 1 0 12M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m5.5 3.5A.5.5 0 0 1 6 11V5a.5.5 0 0 1 1 0v6a.5.5 0 0 1-.5.5m3 0A.5.5 0 0 1 9 11V5a.5.5 0 0 1 1 0v6a.5.5 0 0 1-.5.5"></svg:path>`,
})
export class FluentPauseCircle16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
