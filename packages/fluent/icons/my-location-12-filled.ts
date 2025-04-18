import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMyLocation12FilledIcon],svg[fluent-my-location-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7.75a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5m.75-5.68a4 4 0 0 1 3.18 3.18h1.32a.75.75 0 0 1 0 1.5H9.93a4 4 0 0 1-3.183 3.18l.003.07v1.25a.75.75 0 0 1-1.5 0V10q0-.035.003-.07A4 4 0 0 1 2.07 6.747L2 6.75H.75a.75.75 0 0 1 0-1.5H2q.035 0 .07.003A4 4 0 0 1 5.25 2.07V.75a.75.75 0 0 1 1.5 0zM8.5 6a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0"></svg:path>`,
})
export class FluentMyLocation12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
