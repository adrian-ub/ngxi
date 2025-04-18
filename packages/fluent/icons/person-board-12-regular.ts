import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonBoard12RegularIcon],svg[fluent-person-board-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM2 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm1.268 7A2 2 0 0 0 5 11h2a4 4 0 0 0 4-4V5a2 2 0 0 0-1-1.732V7a3 3 0 0 1-3 3zM6 3.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m1 2.25c0 .75-.5 1.5-2 1.5s-2-.75-2-1.5A.75.75 0 0 1 3.75 5h2.5a.75.75 0 0 1 .75.75"></svg:path>`,
})
export class FluentPersonBoard12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
