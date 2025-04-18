import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNumberCircle728FilledIcon],svg[fluent-number-circle-7-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 14C2 7.373 7.373 2 14 2s12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14m7.75-6a.75.75 0 0 0 0 1.5h6.995a26 26 0 0 0-1.2 1.903c-1.13 1.976-2.419 4.807-3.033 8.214a.75.75 0 0 0 1.476.266c.576-3.193 1.788-5.862 2.86-7.736a24 24 0 0 1 1.394-2.165a16 16 0 0 1 .541-.7l.028-.034l.006-.006V9.24A.75.75 0 0 0 18.25 8z"></svg:path>`,
})
export class FluentNumberCircle728FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
